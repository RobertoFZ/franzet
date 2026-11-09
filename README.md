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

## Contacto sin servicio de envío

El formulario prepara un borrador dirigido a **roberto@franzet.com** mediante `mailto:`. El visitante revisa el mensaje y lo envía desde su aplicación de correo. El sitio no necesita API keys, SMTP ni un endpoint de envío y no confirma que el correo haya sido enviado o recibido.

“Copiar mensaje” copia destinatario, asunto y contenido. Si el navegador no permite copiar automáticamente —por ejemplo, en una vista previa HTTP en la red local— se muestra el mensaje seleccionado para copiarlo manualmente. Los datos del formulario se conservan al preparar o copiar el mensaje y no se guardan en almacenamiento persistente.

Sin JavaScript, el botón permanece deshabilitado y el enlace directo al correo sigue disponible. El formulario declara un destino `mailto:` y método POST para evitar que los datos se incorporen a una URL del sitio antes de la hidratación. Algunos clientes de correo limitan la longitud de los enlaces `mailto:`; la copia manual conserva el mensaje completo como alternativa.

El borrador se construye en `src/lib/contact-draft.ts`. `npm test` verifica destinatario fijo, tema, caracteres especiales, saltos de línea, enlaces y contenido completo para copiar. Las pruebas no abren una aplicación de correo ni envían mensajes.

## Publicación

Los cambios de esta implementación se conservan en commits locales en `main`. El push y el despliegue se realizan únicamente cuando el propietario lo indique.
