import { createHash } from "node:crypto";
import { focusOptions, site } from "./site";

type Options = {
  env: { RESEND_API_KEY?: string; CONTACT_FROM_EMAIL?: string };
  fetch?: typeof fetch;
  now?: () => number;
};

function result(status: number, message: string) {
  return Response.json(
    { ok: status === 200, message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    size += chunk.value.byteLength;
    if (size > 10_000) {
      await reader.cancel();
      return null;
    }
    chunks.push(chunk.value);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export function createAdvisoryHandler(options: Options) {
  const providerFetch = options.fetch ?? fetch;
  const now = options.now ?? Date.now;
  // Best-effort per-process protection; the hosting firewall should handle distributed abuse.
  const attempts = new Map<string, { count: number; expires: number }>();

  return async function handle(request: Request) {
    const publicUrl = new URL(request.url);
    // Next can expose its internal hostname here; Host is the browser-facing authority.
    publicUrl.host = request.headers.get("host") ?? publicUrl.host;
    if (request.headers.get("origin") !== publicUrl.origin)
      return result(403, "La solicitud debe enviarse desde este sitio.");
    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .startsWith("application/json")
    )
      return result(415, "Formato de solicitud no válido.");
    let body: Record<string, unknown>;
    try {
      const raw = await readBody(request);
      if (raw === null) return result(413, "El mensaje es demasiado largo.");
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
        return result(400, "Revisa los datos del formulario.");
      body = parsed as Record<string, unknown>;
    } catch {
      return result(400, "No se pudo leer la solicitud.");
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const context = typeof body.context === "string" ? body.context.trim() : "";
    const link = typeof body.link === "string" ? body.link.trim() : "";
    const focus = focusOptions.find((item) => item.value === body.focus);
    const submissionId =
      typeof body.submissionId === "string" ? body.submissionId : "";
    let validLink = !link;
    try {
      if (link)
        validLink = ["http:", "https:"].includes(new URL(link).protocol);
    } catch {
      validLink = false;
    }
    if (
      name.length < 2 ||
      name.length > 100 ||
      /[\r\n\x00-\x1f]/.test(name) ||
      email.length > 254 ||
      !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      !focus ||
      context.length < 20 ||
      context.length > 4_000 ||
      link.length > 2_000 ||
      !validLink ||
      body.consent !== true ||
      (body.website !== undefined && body.website !== "") ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        submissionId,
      )
    ) {
      return result(
        400,
        "Revisa tu nombre, correo, tema y descripción. La descripción debe tener entre 20 y 4,000 caracteres y debes aceptar el uso de tus datos para responderte.",
      );
    }

    const { RESEND_API_KEY: apiKey, CONTACT_FROM_EMAIL: from } = options.env;
    if (!apiKey || !from)
      return result(
        503,
        `El formulario no está disponible ahora. Puedes escribir a ${site.email}.`,
      );

    const timestamp = now();
    const key = createHash("sha256").update(email.toLowerCase()).digest("hex");
    for (const [entry, attempt] of attempts)
      if (attempt.expires <= timestamp) attempts.delete(entry);
    const attempt = attempts.get(key) ?? {
      count: 0,
      expires: timestamp + 15 * 60 * 1_000,
    };
    if (attempt.count >= 5)
      return result(
        429,
        "Has enviado varios intentos. Espera 15 minutos antes de volver a intentarlo.",
      );
    if (attempts.size >= 1_000 && !attempts.has(key))
      return result(
        429,
        "El formulario está recibiendo muchas solicitudes. Inténtalo más tarde.",
      );
    attempt.count++;
    attempts.set(key, attempt);

    const text = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Tema: ${focus.label}`,
      "",
      context,
      "",
      link ? `Contexto: ${link}` : "",
      "La persona aceptó el uso de sus datos para responder esta solicitud.",
    ]
      .filter(Boolean)
      .join("\n");
    const idempotencyKey = createHash("sha256")
      .update(
        JSON.stringify({
          submissionId,
          name,
          email,
          focus: focus.value,
          context,
          link,
        }),
      )
      .digest("hex");
    try {
      const response = await providerFetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `advisory-${idempotencyKey}`,
        },
        body: JSON.stringify({
          from,
          to: [site.email],
          reply_to: email,
          subject: `Asesoría: ${focus.label}`,
          text,
        }),
        signal: AbortSignal.timeout(10_000),
        redirect: "error",
      });
      if (!response.ok)
        return result(
          502,
          "No pudimos confirmar el envío. Tus datos siguen en el formulario; puedes volver a intentarlo o escribir por correo.",
        );
      const receipt: unknown = await response.json();
      if (
        !receipt ||
        typeof receipt !== "object" ||
        !("id" in receipt) ||
        typeof receipt.id !== "string" ||
        !receipt.id
      )
        throw new Error("Missing email receipt");
      return result(
        200,
        "Recibí tu solicitud. Revisaré el contexto y te responderé por correo para confirmar el alcance y los siguientes pasos.",
      );
    } catch {
      return result(
        502,
        "No pudimos confirmar el envío. Puedes volver a intentarlo o escribir por correo.",
      );
    }
  };
}
