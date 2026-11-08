import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { once } from "node:events";
import { createAdvisoryHandler } from "../src/lib/advisory-request";

const payload = () => ({
  name: "Persona de prueba",
  email: "example@example.com",
  focus: "agents",
  context: "Quiero definir un flujo de agentes para mi proyecto web.",
  link: "https://example.com/project",
  website: "",
  consent: true,
  submissionId: crypto.randomUUID(),
});
const request = (body: unknown, origin = "https://franzet.com") =>
  new Request("https://franzet.com/api/asesorias", {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify(body),
  });

test("rejects another origin before contacting the provider", async () => {
  const handler = createAdvisoryHandler({ env: {} });
  assert.equal(
    (await handler(request(payload(), "https://elsewhere.example"))).status,
    403,
  );
});

test("uses the browser-facing host when Next exposes an internal URL", async () => {
  const handler = createAdvisoryHandler({ env: {} });
  const localRequest = new Request("http://localhost:3100/api/asesorias", {
    method: "POST",
    headers: {
      host: "127.0.0.1:3100",
      origin: "http://127.0.0.1:3100",
      "content-type": "application/json",
    },
    body: JSON.stringify(payload()),
  });
  assert.equal((await handler(localRequest)).status, 503);
  const foreignRequest = new Request("http://localhost:3100/api/asesorias", {
    method: "POST",
    headers: {
      host: "127.0.0.1:3100",
      origin: "http://elsewhere.example",
      "content-type": "application/json",
    },
    body: JSON.stringify(payload()),
  });
  assert.equal((await handler(foreignRequest)).status, 403);
});

test("rejects invalid data, consent, links, and honeypot without sending", async () => {
  const handler = createAdvisoryHandler({ env: {} });
  for (const invalid of [
    { email: "invalid" },
    { context: "short" },
    { name: "A\nB" },
    { focus: "invalid" },
    { consent: false },
    { link: "javascript:alert(1)" },
    { website: "bot" },
    { submissionId: "bad-id" },
  ]) {
    assert.equal(
      (await handler(request({ ...payload(), ...invalid }))).status,
      400,
    );
  }
  assert.equal((await handler(request(null))).status, 400);
});

test("reports missing configuration instead of pretending a message was sent", async () => {
  const response = await createAdvisoryHandler({ env: {} })(request(payload()));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

test("rejects oversized bodies even without a content-length header", async () => {
  const response = await createAdvisoryHandler({ env: {} })(
    request({ ...payload(), context: "x".repeat(20_000) }),
  );
  assert.equal(response.status, 413);
});

test("uses the actual HTTP transport, fixed recipient, reply-to and idempotency key", async () => {
  const received: { body?: Record<string, unknown>; key?: string } = {};
  const server = createServer(async (req, res) => {
    let text = "";
    for await (const chunk of req) text += chunk;
    received.body = JSON.parse(text);
    received.key = String(req.headers["idempotency-key"]);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ id: "email-test-id" }));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const handler = createAdvisoryHandler({
      env: {
        RESEND_API_KEY: "test-key",
        CONTACT_FROM_EMAIL: "Franzet <example@example.com>",
      },
      fetch: (input, init) => {
        assert.equal(String(input), "https://api.resend.com/emails");
        return fetch(`http://127.0.0.1:${address.port}/emails`, init);
      },
    });
    const data = payload();
    const response = await handler(request(data));
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ok, true);
    assert.deepEqual(received.body?.to, ["roberto@franzet.com"]);
    assert.equal(received.body?.reply_to, data.email);
    assert.match(String(received.body?.text), /Quiero definir un flujo/);
    const key = received.key;
    await handler(request(data));
    assert.equal(received.key, key);
  } finally {
    server.close();
    await once(server, "close");
  }
});

test("provider errors, invalid success responses and timeouts never report success", async () => {
  const env = {
    RESEND_API_KEY: "test-key",
    CONTACT_FROM_EMAIL: "example@example.com",
  };
  for (const providerFetch of [
    async () => new Response("Unavailable", { status: 500 }),
    async () => Response.json({}),
    async () => {
      throw new Error("timeout");
    },
  ]) {
    const response = await createAdvisoryHandler({ env, fetch: providerFetch })(
      request(payload()),
    );
    assert.equal(response.status, 502);
    assert.equal((await response.json()).ok, false);
  }
});

test("limits repeated attempts and permits them again after the window expires", async () => {
  let now = 1_000;
  const handler = createAdvisoryHandler({
    env: {
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "example@example.com",
    },
    now: () => now,
    fetch: async () => Response.json({ id: "test-id" }),
  });
  for (let i = 0; i < 5; i++)
    assert.equal((await handler(request(payload()))).status, 200);
  assert.equal((await handler(request(payload()))).status, 429);
  now += 15 * 60 * 1_000;
  assert.equal((await handler(request(payload()))).status, 200);
});
