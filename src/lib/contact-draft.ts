import { focusOptions, site } from "./site";

type ContactDetails = {
  name: string;
  email: string;
  focus: string;
  context: string;
  link: string;
};

export function buildContactDraft(details: ContactDetails) {
  const topic =
    focusOptions.find((option) => option.value === details.focus) ??
    focusOptions[0];
  const subject = `Asesoría: ${topic.label}`;
  const lines = [
    "Hola, Roberto.",
    "",
    `Me interesa una asesoría sobre: ${topic.label}.`,
    "",
    `Nombre: ${details.name.trim()}`,
    `Correo de contacto: ${details.email.trim()}`,
    "",
    "Mi proyecto y lo que quiero resolver:",
    details.context.trim(),
    ...(details.link.trim()
      ? ["", `Enlace de contexto: ${details.link.trim()}`]
      : []),
    "",
    "Gracias.",
  ];
  const body = lines.join("\n").replace(/\r\n|\r|\n/g, "\r\n");
  return {
    subject,
    body,
    href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    copyText: `Para: ${site.email}\r\nAsunto: ${subject}\r\n\r\n${body}`,
  };
}

export type ContactDraft = ReturnType<typeof buildContactDraft>;
