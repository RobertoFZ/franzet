import ActionLink from "@/components/ActionLink";
export default function NotFound() {
  return (
    <section className="rf-page-intro rf-wrap rf-not-found">
      <p className="rf-eyebrow">PÁGINA NO ENCONTRADA</p>
      <h1>
        Busquemos
        <br />
        <em>otro camino.</em>
      </h1>
      <p className="rf-lead">
        La página que buscas no existe o cambió de dirección.
      </p>
      <div className="rf-actions">
        <ActionLink href="/">Volver al inicio</ActionLink>
        <ActionLink href="/asesorias" variant="text">
          Ver asesorías
        </ActionLink>
      </div>
    </section>
  );
}
