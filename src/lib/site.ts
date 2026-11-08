export const site = {
  name: "Roberto Franco",
  url: "https://franzet.com",
  email: "roberto@franzet.com",
  description:
    "Asesorías prácticas de software e IA con Roberto Franco. Trabajamos sobre tu proyecto para incorporar agentes, revisar código y resolver decisiones técnicas.",
};

export const focusOptions = [
  { value: "agents", label: "Incorporar agentes a mi flujo" },
  { value: "review", label: "Revisar código y validaciones" },
  { value: "decision", label: "Resolver una decisión técnica" },
  { value: "team", label: "Trabajar con mi equipo" },
] as const;
export type AdvisoryFocus = (typeof focusOptions)[number]["value"];
export const advisory = {
  name: "Destraba tu proyecto",
  price: "$2,000",
  currency: "MXN",
  duration: "90 minutos",
};
export function advisoryHref(focus?: AdvisoryFocus) {
  return `/asesorias${focus ? `?tema=${focus}` : ""}#solicitud`;
}
