import ActionLink from "./ActionLink";
import { advisoryHref } from "@/lib/site";
export default function ClosingSection() {
  return (
    <section className="rf-closing rf-wrap">
      <p className="rf-eyebrow">EMPECEMOS POR TU CASO</p>
      <h2>
        ¿Qué estás
        <br />
        <em>intentando resolver?</em>
      </h2>
      <ActionLink href={advisoryHref()}>Solicitar asesoría</ActionLink>
    </section>
  );
}
