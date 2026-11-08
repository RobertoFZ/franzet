import type { Metadata } from "next";
import ActionLink from "@/components/ActionLink";
import ClosingSection from "@/components/ClosingSection";
import { cases } from "@/lib/cases";
export const metadata: Metadata = {
  title: "Casos y proyectos",
  description:
    "Robertito Dashboard, Software Factory y Zinual: proyectos y decisiones de ingeniería de Roberto Franco.",
  alternates: { canonical: "/casos" },
};
export default function CasesPage() {
  return (
    <>
      <div className="rf-page-intro rf-wrap">
        <p className="rf-eyebrow">PROYECTOS Y APRENDIZAJES</p>
        <h1>
          Decisiones detrás
          <br />
          <em>del código.</em>
        </h1>
        <p className="rf-lead">
          Proyectos propios para mostrar cómo conecto herramientas, organizo
          procesos y resuelvo problemas de ingeniería.
        </p>
      </div>
      <div className="rf-cases-list rf-wrap">
        {cases.map((project, index) => (
          <article key={project.slug} className="rf-case-row">
            <p className="rf-case-index">
              0{index + 1} / {project.category}
            </p>
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="rf-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ActionLink href={`/casos/${project.slug}`} variant="outline">
              Explorar el caso
            </ActionLink>
          </article>
        ))}
      </div>
      <ClosingSection />
    </>
  );
}
