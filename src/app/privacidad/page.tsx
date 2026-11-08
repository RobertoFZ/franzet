import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Privacidad",
  alternates: { canonical: "/privacidad" },
};
export default function PrivacyPage() {
  return (
    <article className="rf-prose rf-wrap">
      <p className="rf-eyebrow">TUS DATOS</p>
      <h1>
        Aviso de
        <br />
        <em>privacidad.</em>
      </h1>
      <h2>Quién recibe tu solicitud</h2>
      <p>
        Roberto Franco recibe las solicitudes de asesoría de este sitio. Puedes
        contactarme en <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h2>Qué información compartes</h2>
      <p>
        El formulario solicita tu nombre, correo electrónico, tema y descripción
        del caso. Puedes añadir un enlace de contexto. Comparte únicamente
        información que tengas permiso de enviar y evita incluir contraseñas,
        credenciales o datos personales de otras personas.
      </p>
      <h2>Para qué la uso</h2>
      <p>
        Uso los datos para evaluar si puedo ayudarte, responder tu solicitud y,
        si acordamos trabajar juntos, coordinar la asesoría. Enviar el
        formulario no te suscribe a una lista de publicidad.
      </p>
      <h2>Cómo se procesa</h2>
      <p>
        El sitio se aloja en Vercel. Cuando el formulario está habilitado,
        Resend procesa el envío del correo que recibiré con tu solicitud. Tu
        navegador no guarda el contenido del formulario en almacenamiento
        persistente. El proveedor de correo y mi buzón pueden conservar el
        mensaje para gestionar la conversación.
      </p>
      <h2>Medición del sitio</h2>
      <p>
        Uso Vercel Analytics y Speed Insights para conocer el uso y rendimiento
        general del sitio. El contenido del formulario no se envía a estas
        herramientas como parte de eventos personalizados.
      </p>
      <h2>Consultas sobre tus datos</h2>
      <p>
        Para solicitar acceso, corrección o eliminación de la información que me
        compartiste, escribe a <a href={`mailto:${site.email}`}>{site.email}</a>
        . Indica el correo desde el que enviaste la solicitud para poder
        localizarla.
      </p>
    </article>
  );
}
