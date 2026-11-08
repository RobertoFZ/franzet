import type { Metadata } from "next";
import ActionLink from "@/components/ActionLink";
import ContactForm from "@/components/ContactForm";
import { advisory, advisoryHref, focusOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Asesorías de software e IA",
  description:
    "Destraba tu proyecto: asesoría individual de 90 minutos con Roberto Franco. Preparación previa, recomendaciones por escrito y seguimiento. $2,000 MXN.",
  alternates: { canonical: "/asesorias" },
};
type Props = { searchParams: Promise<{ tema?: string | string[] }> };

export default async function AdvisoryPage({ searchParams }: Props) {
  const { tema } = await searchParams;
  const initialFocus =
    focusOptions.find((option) => option.value === tema)?.value ?? "agents";
  return (
    <>
      <div className="rf-page-intro rf-wrap">
        <p className="rf-eyebrow">ASESORÍA INDIVIDUAL · SOFTWARE + IA</p>
        <h1>
          Destraba
          <br />
          <em>tu proyecto.</em>
        </h1>
        <p className="rf-lead">
          Trae una decisión técnica, un flujo con IA que no está funcionando o
          código que necesita una segunda mirada.
        </p>
      </div>
      <div className="rf-advisory-layout rf-wrap">
        <div>
          <h2>
            Tu caso.
            <br />
            <em>Una sesión con foco.</em>
          </h2>
          <p className="rf-body-lead">
            Trabajamos sobre un problema acordado. Revisamos el contexto,
            exploramos alternativas y definimos qué hacer después.
          </p>
          <dl className="rf-inclusions">
            <div>
              <dt>Antes</dt>
              <dd>
                Cuestionario y revisión acotada del material que acordemos.
              </dd>
            </div>
            <div>
              <dt>Durante</dt>
              <dd>
                90 minutos por videollamada para analizar tu caso y trabajar
                juntos.
              </dd>
            </div>
            <div>
              <dt>Después</dt>
              <dd>
                Resumen con diagnóstico, recomendaciones y siguientes pasos.
              </dd>
            </div>
            <div>
              <dt>Seguimiento</dt>
              <dd>
                Una ronda de aclaraciones por correo durante los siguientes
                siete días.
              </dd>
            </div>
          </dl>
        </div>
        <aside className="rf-price-card">
          <p className="rf-eyebrow">{advisory.name}</p>
          <div className="rf-price">
            {advisory.price} <span>{advisory.currency}</span>
          </div>
          <p>Pago único · sesión de {advisory.duration}</p>
          <hr />
          <ul>
            <li>Preparación previa</li>
            <li>Trabajo sobre tu proyecto</li>
            <li>Recomendaciones por escrito</li>
            <li>Una ronda de aclaraciones</li>
          </ul>
          <ActionLink href="#solicitud">Compartir mi caso</ActionLink>
          <span className="rf-caption">
            Primero acordamos el alcance. Después, horario y pago.
          </span>
        </aside>
      </div>
      <section className="rf-section rf-wrap">
        <p className="rf-eyebrow">ANTES DE RESERVAR</p>
        <h2>
          Para saber
          <br />
          <em>si encajamos.</em>
        </h2>
        <div className="rf-fit-grid">
          <div>
            <h3>Esta sesión te puede ayudar si…</h3>
            <ul>
              <li>Ya tienes un proyecto o proceso sobre el que trabajar.</li>
              <li>Puedes explicar un problema concreto.</li>
              <li>Quieres tomar decisiones y aplicar lo aprendido.</li>
            </ul>
          </div>
          <div>
            <h3>Si necesitas un alcance más amplio</h3>
            <p>
              Una implementación completa, la revisión de todo un sistema o un
              taller para tu equipo requieren una propuesta específica. Puedes
              indicarlo en tu solicitud.
            </p>
            <ActionLink href={advisoryHref("team")} variant="text">
              Consultar para mi equipo
            </ActionLink>
          </div>
        </div>
      </section>
      <section
        className="rf-request-section rf-wrap"
        id="solicitud"
        aria-labelledby="request-title"
      >
        <div>
          <p className="rf-eyebrow">PRIMER PASO</p>
          <h2 id="request-title">
            Cuéntame
            <br />
            <em>tu caso.</em>
          </h2>
          <p>
            Reviso el contexto y confirmamos si puedo ayudarte. Después
            acordamos horario y pago.
          </p>
          <p className="rf-caption">
            Comparte solo el contexto necesario. Puedes usar ejemplos reducidos
            o material anonimizado.
          </p>
        </div>
        <ContactForm key={initialFocus} initialFocus={initialFocus} />
      </section>
      <section className="rf-section rf-wrap rf-faq">
        <p className="rf-eyebrow">PREGUNTAS FRECUENTES</p>
        <h2>
          Antes de
          <br />
          <em>dar el paso.</em>
        </h2>
        {[
          [
            "¿Necesito saber programar?",
            "La asesoría está pensada para personas que ya desarrollan software. Trabajaremos sobre tu proyecto y tu nivel de experiencia.",
          ],
          [
            "¿Vas a implementar todo por mí?",
            "La sesión es de asesoría y trabajo conjunto sobre un problema acotado. Una implementación más amplia se evalúa por separado.",
          ],
          [
            "¿Tengo que compartir código privado?",
            "Podemos empezar con una descripción, un ejemplo reducido o material anonimizado. Antes de la sesión acordamos qué contexto hace falta.",
          ],
          [
            "¿Puedo pedir una sesión para mi equipo?",
            "Sí. Selecciona esa opción en el formulario y cuéntame el objetivo. Definiremos un formato y alcance específicos.",
          ],
          [
            "¿Cómo reservo o cambio el horario?",
            "Primero confirmamos el alcance por correo. Después acordamos el horario y el pago. Si necesitas mover la sesión, responde al correo de confirmación para coordinar otra fecha.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}
