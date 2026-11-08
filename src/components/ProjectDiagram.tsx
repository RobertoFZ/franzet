export default function ProjectDiagram({
  kind,
}: {
  kind: "dashboard" | "factory";
}) {
  const dashboard = kind === "dashboard";
  return (
    <div className={`rf-project-art rf-art-${kind}`}>
      <div className="rf-art-heading">
        <span>{dashboard ? "ROBERTITO" : "SOFTWARE FACTORY"}</span>
        <span>ESQUEMA DEL PROYECTO</span>
      </div>
      {dashboard ? (
        <>
          <div className="rf-signal-flow">
            <span>Agentes</span>
            <span>Tickets</span>
            <span>PRs</span>
          </div>
          <div className="rf-flow-down" aria-hidden="true">
            ↓
          </div>
          <div className="rf-flow-destination">Una vista operativa</div>
        </>
      ) : (
        <>
          <div className="rf-factory-flow">
            <span>Alcance</span>
            <span aria-hidden="true">→</span>
            <span>Agente</span>
            <span aria-hidden="true">→</span>
            <span>Revisión</span>
          </div>
          <div className="rf-factory-human">
            <span className="rf-dot" />
            Supervisión humana en los puntos de decisión
          </div>
        </>
      )}
    </div>
  );
}
