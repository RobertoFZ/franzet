import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ActionLink from "@/components/ActionLink";
import ProjectDiagram from "@/components/ProjectDiagram";
import { cases } from "@/lib/cases";
import { advisoryHref } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return cases.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/casos/${project.slug}` },
  };
}
export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = cases.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <article className="rf-case-detail">
      <div className="rf-page-intro rf-wrap">
        <Link href="/casos" className="rf-text-link rf-back">
          ← Todos los casos
        </Link>
        <p className="rf-eyebrow">{project.category}</p>
        <h1>
          {project.name}
          <em>.</em>
        </h1>
        <p className="rf-lead">{project.description}</p>
        <div className="rf-tags">
          <span>Proyecto propio</span>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="rf-detail-body rf-wrap">
        {project.diagram && <ProjectDiagram kind={project.diagram} />}
        {project.sections.map((section, index) => (
          <section key={section.label}>
            <p className="rf-item-number">
              0{index + 1} / {section.label}
            </p>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <ActionLink href={advisoryHref(project.focus)}>
          Conversar sobre mi proyecto
        </ActionLink>
      </div>
    </article>
  );
}
