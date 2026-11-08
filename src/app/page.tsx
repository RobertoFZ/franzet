import Image from "next/image";
import Link from "next/link";
import ActionLink, { Arrow } from "@/components/ActionLink";
import ClosingSection from "@/components/ClosingSection";
import ProjectDiagram from "@/components/ProjectDiagram";
import { cases } from "@/lib/cases";
import { advisory, advisoryHref } from "@/lib/site";

const help = [
  {
    focus: "agents",
    label: "AGENTES",
    title: (
      <>
        Incorporar IA
        <br />a tu forma de trabajar.
      </>
    ),
    text: "Qué delegar, qué contexto preparar y cómo comprobar el resultado.",
    action: "Trabajemos en tu flujo",
  },
  {
    focus: "review",
    label: "REVISIÓN",
    title: (
      <>
        Entender el código
        <br />
        antes de integrarlo.
      </>
    ),
    text: "Revisamos cambios, riesgos y pruebas para tomar una decisión informada.",
    action: "Revisemos tu caso",
  },
  {
    focus: "decision",
    label: "DECISIONES",
    title: (
      <>
        Definir el siguiente
        <br />
        paso de tu proyecto.
      </>
    ),
    text: "Ordenamos el contexto, comparamos alternativas y elegimos prioridades.",
    action: "Conversemos sobre tu proyecto",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="rf-hero rf-wrap" aria-labelledby="home-title">
        <div className="rf-hero-copy">
          <p className="rf-eyebrow">
            <span className="rf-dot" />
            ASESORÍAS DE SOFTWARE E IA
          </p>
          <h1 id="home-title">
            Lleva la IA
            <br />a tu proyecto.
            <br />
            <em>Con criterio.</em>
          </h1>
          <p className="rf-lead">
            Te ayudo a trabajar con agentes, revisar el código que generan y
            destrabar decisiones técnicas en tu proyecto.
          </p>
          <div className="rf-actions">
            <ActionLink href="/asesorias">Ver la asesoría</ActionLink>
            <ActionLink href="/casos" variant="text">
              Explorar mis proyectos
            </ActionLink>
          </div>
          <p className="rf-caption rf-hero-note">
            Para desarrolladores y equipos pequeños que ya construyen software.
          </p>
        </div>
        <figure className="rf-portrait">
          <Image
            src="/avatar.png"
            alt="Retrato ilustrado de Roberto Franco"
            width={420}
            height={420}
            priority
            sizes="(max-width: 640px) 245px, 350px"
          />
          <figcaption>
            <span className="rf-eyebrow">LA PERSONA CON QUIEN TRABAJARÁS</span>
            <span className="rf-portrait-name">Roberto Franco</span>
            <span>Ingeniero de software &amp; tech lead</span>
          </figcaption>
          <div className="rf-portrait-stamp" aria-hidden="true">
            CONSTRUIR
            <br />
            REVISAR
            <br />
            COMPARTIR ↗
          </div>
        </figure>
      </section>
      <div className="rf-expertise rf-wrap">
        <span>INGENIERÍA DE SOFTWARE</span>
        <span>AGENTES DE IA</span>
        <span>REVISIÓN DE CÓDIGO</span>
        <span>LIDERAZGO TÉCNICO</span>
      </div>
      <section className="rf-section rf-wrap" aria-labelledby="help-title">
        <div className="rf-section-head">
          <div>
            <p className="rf-eyebrow">EN QUÉ PUEDO AYUDARTE</p>
            <h2 id="help-title">
              Tu proyecto,
              <br />
              <em>sobre la mesa.</em>
            </h2>
          </div>
          <p>
            Trabajamos sobre lo que estás construyendo y el problema que
            necesitas resolver.
          </p>
        </div>
        <div className="rf-three-columns rf-help-grid">
          {help.map((item, index) => (
            <Link
              className="rf-help-item"
              key={item.focus}
              href={advisoryHref(item.focus)}
            >
              <span className="rf-item-number">
                0{index + 1} / {item.label}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="rf-item-link">
                {item.action}
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="rf-offer rf-wrap" aria-labelledby="offer-title">
        <div>
          <p className="rf-eyebrow">ASESORÍA INDIVIDUAL</p>
          <h2 id="offer-title">
            Destraba
            <br />
            <em>tu proyecto.</em>
          </h2>
          <p>
            Un problema concreto. Una conversación a fondo. Un plan para
            avanzar.
          </p>
          <div className="rf-offer-tags">
            <span>{advisory.duration}</span>
            <span>Preparación previa</span>
            <span>Resumen escrito</span>
          </div>
        </div>
        <div className="rf-offer-price">
          <span className="rf-caption">SESIÓN INDIVIDUAL · PAGO ÚNICO</span>
          <div className="rf-price">
            {advisory.price} <span>{advisory.currency}</span>
          </div>
          <span className="rf-caption">Precio de lanzamiento</span>
          <ActionLink href="/asesorias" variant="light">
            Conocer la asesoría
          </ActionLink>
        </div>
      </section>
      <section className="rf-section rf-wrap" aria-labelledby="work-title">
        <div className="rf-section-head">
          <div>
            <p className="rf-eyebrow">TRABAJO PROPIO</p>
            <h2 id="work-title">
              Experiencia que
              <br />
              <em>puedes explorar.</em>
            </h2>
          </div>
          <ActionLink href="/casos" variant="text">
            Todos los casos
          </ActionLink>
        </div>
        <div className="rf-two-columns">
          {cases.slice(0, 2).map((project) => (
            <article className="rf-project" key={project.slug}>
              {project.diagram && <ProjectDiagram kind={project.diagram} />}
              <div className="rf-project-body">
                <p className="rf-eyebrow">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ActionLink href={`/casos/${project.slug}`} variant="text">
                  Explorar el caso
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="rf-section rf-wrap rf-process"
        aria-labelledby="process-title"
      >
        <p className="rf-eyebrow">CÓMO TRABAJAMOS</p>
        <h2 id="process-title">
          Del contexto
          <br />
          <em>al siguiente paso.</em>
        </h2>
        <div className="rf-three-columns">
          {[
            {
              title: "Me cuentas tu caso.",
              text: "Qué estás construyendo, qué has intentado y dónde necesitas ayuda.",
            },
            {
              title: "Acordamos el alcance.",
              text: "Confirmamos que puedo ayudarte y definimos el foco de la sesión.",
            },
            {
              title: "Trabajamos juntos.",
              text: "Revisamos tu proyecto y te llevas recomendaciones por escrito.",
            },
          ].map((step, index) => (
            <div key={step.title}>
              <span className="rf-item-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="sobre-mi"
        className="rf-about rf-wrap"
        aria-labelledby="about-title"
      >
        <div>
          <p className="rf-eyebrow">SOBRE MÍ</p>
          <h2 id="about-title">
            Soy Roberto.
            <br />
            <em>Construyo lo que enseño.</em>
          </h2>
        </div>
        <div>
          <p>
            Trabajo como ingeniero de software y tech lead. Mi experiencia
            incluye sistemas de revenue management, desarrollo de productos e
            integración de IA en procesos de ingeniería.
          </p>
          <p>
            En mis proyectos conecto agentes, herramientas de seguimiento y
            revisiones de código. En las asesorías aplicamos esa experiencia a
            tu situación.
          </p>
          <span className="rf-signature">
            Roberto Franco
            <Arrow />
          </span>
        </div>
      </section>
      <ClosingSection />
    </>
  );
}
