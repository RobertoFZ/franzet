"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ActionLink";
import { buildContactDraft, type ContactDraft } from "@/lib/contact-draft";
import { focusOptions, site, type AdvisoryFocus } from "@/lib/site";

const feedbackMessages = {
  idle: "Si tu aplicación no se abrió, usa el enlace de arriba o copia el mensaje.",
  copied: "Mensaje copiado. Pégalo en tu correo y envíalo cuando esté listo.",
  manual:
    "No pude copiar automáticamente. El mensaje está seleccionado: usa Copiar o Ctrl+C / ⌘C y pégalo en tu correo.",
  unavailable:
    "No pude abrir tu aplicación de correo. Puedes copiar el mensaje y enviarlo desde tu cuenta.",
};

export default function ContactForm({
  initialFocus,
}: {
  initialFocus: AdvisoryFocus;
}) {
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState<ContactDraft | null>(null);
  const [feedback, setFeedback] =
    useState<keyof typeof feedbackMessages>("idle");
  const form = useRef<HTMLFormElement>(null);
  const preview = useRef<HTMLTextAreaElement>(null);
  const revision = useRef(0);

  useEffect(() => {
    setReady(true);
  }, []);
  useEffect(() => {
    if (feedback === "manual") {
      preview.current?.focus();
      preview.current?.select();
    }
  }, [feedback, draft]);

  function prepare() {
    if (!form.current?.reportValidity()) return null;
    const data = new FormData(form.current);
    const value = (name: string) => String(data.get(name) ?? "");
    const next = buildContactDraft({
      name: value("name"),
      email: value("email"),
      focus: value("focus"),
      context: value("context"),
      link: value("link"),
    });
    setDraft(next);
    return next;
  }

  function openEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = prepare();
    if (!next) return;
    setFeedback("idle");
    try {
      window.location.assign(next.href);
    } catch {
      setFeedback("unavailable");
    }
  }

  async function copyMessage() {
    const next = prepare();
    if (!next) return;
    const version = revision.current;
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(next.copyText);
      if (revision.current === version) setFeedback("copied");
    } catch {
      if (revision.current === version) setFeedback("manual");
    }
  }

  function clearPreview() {
    revision.current++;
    setDraft(null);
    setFeedback("idle");
  }

  return (
    <div>
      <form
        ref={form}
        className="rf-form"
        method="post"
        action={`mailto:${site.email}`}
        encType="text/plain"
        onSubmit={openEmail}
        onChange={clearPreview}
      >
        <fieldset className="rf-form-fields">
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
            <select id="contact-focus" name="focus" defaultValue={initialFocus}>
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
          <p className="rf-form-privacy">
            Estos datos se usan en tu navegador para preparar el mensaje. Solo
            recibiré tu solicitud cuando envíes el correo.{" "}
            <Link href="/privacidad">Aviso de privacidad</Link>.
          </p>
          <div className="rf-form-actions">
            <button type="submit" className="rf-action" disabled={!ready}>
              Preparar correo
              <Arrow />
            </button>
            <button
              type="button"
              className="rf-text-link"
              onClick={copyMessage}
              disabled={!ready}
            >
              Copiar mensaje
              <Arrow />
            </button>
          </div>
          <p className="rf-caption">
            Se abrirá tu aplicación de correo con el mensaje preparado. Revísalo
            y pulsa Enviar desde ahí. Si no se abre o el mensaje es largo,
            puedes copiarlo.
          </p>
          <p className="rf-caption">
            También puedes escribir directamente a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. No se realiza
            ningún pago ni reserva.
          </p>
          <noscript>
            <p>
              Para usar el formulario, activa JavaScript o escribe directamente
              a <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </noscript>
        </fieldset>
      </form>
      {draft && (
        <section className="rf-draft" aria-labelledby="draft-title">
          <p className="rf-eyebrow">BORRADOR DE TU CORREO</p>
          <h3 id="draft-title">Tu mensaje está preparado.</h3>
          <p>
            Para completar la solicitud, revísalo y envíalo desde tu aplicación
            de correo.
          </p>
          <a className="rf-text-link" href={draft.href}>
            Abrir mi aplicación de correo
            <Arrow />
          </a>
          <label htmlFor="contact-preview" className="rf-preview-label">
            Mensaje para revisar o copiar
          </label>
          <textarea
            ref={preview}
            id="contact-preview"
            className="rf-message-preview"
            readOnly
            rows={9}
            value={draft.copyText}
          />
          <p role="status" className="rf-copy-status">
            {feedbackMessages[feedback]}
          </p>
        </section>
      )}
    </div>
  );
}
