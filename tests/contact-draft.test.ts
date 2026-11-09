import { test } from "node:test";
import assert from "node:assert/strict";
import { buildContactDraft } from "../src/lib/contact-draft";
import { focusOptions, site } from "../src/lib/site";

const input = {
  name: "Ana Pérez",
  email: "ana@example.com",
  focus: "review",
  context: "Quiero revisar una integración de IA en mi proyecto.",
  link: "",
};

test("prepares a fixed-recipient draft with the chosen topic and contact details", () => {
  const draft = buildContactDraft(input);
  const url = new URL(draft.href);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, site.email);
  assert.equal(
    url.searchParams.get("subject"),
    "Asesoría: Revisar código y validaciones",
  );
  const body = url.searchParams.get("body")!;
  assert.match(body, /Nombre: Ana Pérez/);
  assert.match(body, /Correo de contacto: ana@example.com/);
  assert.ok(body.includes(input.context));
  assert.equal(body, draft.body);
});

test("encodes accents, line breaks and URI characters without adding recipients or headers", () => {
  const context =
    "Revisar diseño & código #1?\nPrecio: 50% + pruebas 🚀\ncc=other@example.com";
  const link = "https://example.com/proyecto?q=á&tab=code#sección";
  const draft = buildContactDraft({
    ...input,
    name: "Ana & José",
    context,
    link,
  });
  const url = new URL(draft.href);
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
  assert.equal(url.pathname, site.email);
  assert.ok(draft.body.includes(context.replaceAll("\n", "\r\n")));
  assert.ok(draft.body.includes(link));
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.equal(url.searchParams.get("cc"), null);
});

test("supports every offered topic and falls back safely for an unknown query value", () => {
  for (const topic of focusOptions) {
    assert.equal(
      buildContactDraft({ ...input, focus: topic.value }).subject,
      `Asesoría: ${topic.label}`,
    );
  }
  assert.equal(
    buildContactDraft({
      ...input,
      focus: "invalid\r\nBcc: someone@example.com",
    }).subject,
    `Asesoría: ${focusOptions[0].label}`,
  );
});

test("copies a complete message including recipient and subject without a link placeholder", () => {
  const draft = buildContactDraft(input);
  assert.equal(
    draft.copyText,
    `Para: ${site.email}\r\nAsunto: ${draft.subject}\r\n\r\n${draft.body}`,
  );
  assert.ok(!draft.body.includes("Enlace de contexto:"));
});

test("preserves long messages for manual copying", () => {
  const context = "á & 🚀 ".repeat(500);
  const draft = buildContactDraft({ ...input, context });
  assert.ok(draft.copyText.includes(context.trim()));
  assert.equal(new URL(draft.href).searchParams.get("body"), draft.body);
});
