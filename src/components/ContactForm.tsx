"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ActionLink, { Arrow } from "./ActionLink";
import { focusOptions, site, type AdvisoryFocus } from "@/lib/site";

export default function ContactForm({
  initialFocus,
}: {
  initialFocus: AdvisoryFocus;
}) {
  const [focus, setFocus] = useState<AdvisoryFocus>(initialFocus);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const submissionId = useRef<string | null>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  const submitting = useRef(false);

  useEffect(() => {
    setReady(true);
  }, []);
  useEffect(() => {
    if (status === "success") confirmation.current?.focus();
  }, [status]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    submissionId.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/asesorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          focus,
          context: data.get("context"),
          link: data.get("link"),
          website: data.get("website"),
          consent: data.get("consent") === "on",
          submissionId: submissionId.current,
        }),
        signal: AbortSignal.timeout(15_000),
      });
      const result: unknown = await response.json();
      if (
        !result ||
        typeof result !== "object" ||
        !("ok" in result) ||
        !("message" in result) ||
        typeof result.message !== "string" ||
        typeof result.ok !== "boolean"
      ) {
        throw new Error("Invalid response");
      }
      setMessage(result.message);
      if (!response.ok || result.ok !== true) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      submissionId.current = null;
    } catch {
      setStatus("error");
      setMessage(
        "No pudimos confirmar el envío. Tus datos siguen aquí; puedes volver a intentarlo o escribirme por correo.",
      );
    } finally {
      submitting.current = false;
    }
  }

  if (status === "success")
    return (
      <div className="rf-form-confirmation" ref={confirmation} tabIndex={-1}>
        <span className="rf-confirm-mark" aria-hidden="true">
          ✓
        </span>
        <p className="rf-eyebrow">SOLICITUD RECIBIDA</p>
        <h3>
          Tu siguiente paso,
          <br />
          una conversación.
        </h3>
        <p>{message}</p>
        <p className="rf-caption">
          Todavía no se ha reservado una sesión ni realizado ningún cobro.
        </p>
        <ActionLink href="/casos" variant="text">
          Explorar mis proyectos
        </ActionLink>
      </div>
    );

  return (
    <form
      className="rf-form"
      method="post"
      action="/api/asesorias"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <fieldset className="rf-form-fields" disabled={status === "sending"}>
        <div className="rf-form-row">
          <label htmlFor="contact-name">
            Tu nombre
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="¿Cómo te llamas?"
              minLength={2}
              maxLength={100}
              required
            />
          </label>
          <label htmlFor="contact-email">
            Correo electrónico
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              maxLength={254}
              required
            />
          </label>
        </div>
        <label htmlFor="contact-focus">
          ¿En qué necesitas ayuda?
          <select
            id="contact-focus"
            name="focus"
            value={focus}
            onChange={(event) => setFocus(event.target.value as AdvisoryFocus)}
          >
            {focusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="contact-context">
          ¿Qué estás construyendo y qué quieres resolver?
          <textarea
            id="contact-context"
            name="context"
            rows={5}
            placeholder="Un poco de contexto, lo que has intentado y el resultado que buscas…"
            minLength={20}
            maxLength={4000}
            required
          />
        </label>
        <label htmlFor="contact-link">
          Enlace de contexto (opcional)
          <input
            id="contact-link"
            name="link"
            type="url"
            placeholder="https://…"
            maxLength={2000}
          />
        </label>
        <div className="rf-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">
            Deja este campo vacío
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <label className="rf-consent" htmlFor="contact-consent">
          <input id="contact-consent" name="consent" type="checkbox" required />
          <span>
            Acepto que uses estos datos para responder mi solicitud, de acuerdo
            con el <Link href="/privacidad">aviso de privacidad</Link>.
          </span>
        </label>
        {status === "error" && (
          <div className="rf-form-error" role="alert">
            <p>{message}</p>
            <a href={`mailto:${site.email}`}>Escribir a {site.email}</a>
          </div>
        )}
        <button
          type="submit"
          className="rf-action"
          disabled={!ready || status === "sending"}
        >
          {status === "sending" ? "Enviando tu caso…" : "Enviar mi caso"}
          <Arrow />
        </button>
        <p className="rf-caption">
          Primero confirmamos que puedo ayudarte. Enviar tu caso no implica un
          pago ni una reserva.
        </p>
        <noscript>
          <p>
            Puedes enviar tu caso por correo a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </noscript>
      </fieldset>
    </form>
  );
}
