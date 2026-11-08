# Franzet · Roberto Franco

Sitio personal de asesorías de software e IA, construido con Next.js App Router, React y TypeScript. El diseño usa DM Sans, DM Serif Display, tonos marfil y coral y una variante oscura que sigue la apariencia del dispositivo. Las fuentes se sirven desde la propia aplicación.

## Desarrollo

Requiere Node.js 22 o posterior.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Para verificar el sitio:

```sh
npm test
npm run lint
npm run typecheck
npm run build
npm start
```

## Páginas y contenido

- `/`: presentación, problemas que aborda la asesoría, oferta, proyectos y perfil.
- `/asesorias`: alcance, precio, preguntas frecuentes y solicitud.
- `/casos`: proyectos; cada caso tiene su propia página.
- `/privacidad`: explicación del uso de los datos compartidos.
- `/mentorias` y `/projects` redirigen permanentemente a `/asesorias` y `/casos`.

Los datos comunes están en `src/lib/site.ts`. Los casos se mantienen en `src/lib/cases.ts`. El precio inicial es $2,000 MXN por una sesión de 90 minutos; los talleres para equipos requieren acordar su propio alcance. El formulario no reserva ni cobra automáticamente.

## Entrega de solicitudes por correo

El endpoint `POST /api/asesorias` entrega las solicitudes a **roberto@franzet.com** mediante [Resend](https://resend.com/docs/api-reference/emails/send-email). No guarda las solicitudes en una base de datos.

Copia `.env.example` a `.env.local` y configura:

- `RESEND_API_KEY`: clave de envío de Resend.
- `CONTACT_FROM_EMAIL`: remitente autorizado en un dominio verificado en Resend, por ejemplo `Roberto Franco <asesorias@franzet.com>`.

En Vercel, configura las mismas variables antes de publicar y vuelve a desplegar. No uses un remitente de ejemplo sin verificar el dominio. Las credenciales permanecen en el servidor. Sin configuración el endpoint responde 503, la interfaz conserva los datos y ofrece el correo directo; nunca confirma un envío que no ocurrió.

La solicitud requiere origen coincidente, JSON, un identificador UUID, nombre, correo válido, tema admitido, contexto de 20 a 4,000 caracteres y consentimiento. El enlace de contexto es opcional y admite HTTP(S). El cuerpo está limitado a 10 KB. Un campo oculto filtra envíos automatizados simples. El límite de cinco intentos por correo cada 15 minutos es local a cada proceso y no sustituye un control distribuido del hosting. Configura reglas de firewall del hosting si el tráfico requiere protección adicional.

Los reintentos del mismo formulario usan una clave de idempotencia estable para evitar duplicar el correo en Resend. No se reintenta automáticamente una entrega incierta. La interfaz confirma recepción únicamente cuando el proveedor devuelve un identificador de correo. Esto confirma aceptación por Resend, no entrega final al buzón.

## Verificación del formulario

`npm test` verifica validación, origen, tamaño, configuración ausente, límites, idempotencia y fallos del proveedor. La prueba de transporte usa un servidor HTTP local con respuestas basadas en el contrato de Resend; no envía correos reales. Antes de publicar, falta comprobar la entrega real con un remitente verificado y revisar el contenido y los datos de contacto del sitio.

## Publicación

Los cambios de esta implementación se conservan en commits locales en `main`. El push y el despliegue se realizan únicamente cuando el propietario lo indique.
