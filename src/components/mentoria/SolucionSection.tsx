import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface SolucionSectionProps {
  contentLoaded: boolean;
}

export default function SolucionSection({ contentLoaded }: SolucionSectionProps) {
  const pillars = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff4d6d]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Mentoría 1-a-1",
      subtitle: "Roadmap y feedback exclusivo",
      description: "Sesiones personalizadas donde analizo tu perfil, creo un plan de crecimiento específico y te doy feedback directo sobre tu código y proyectos."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff4d6d]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h3l-6.5-8.5H12V9H7V7H5v11H4z"/>
          <path d="M12.5 11.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM17.5 11.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
        </svg>
      ),
      title: "Mastermind Grupal",
      subtitle: "Colaboración y accountability",
      description: "Únete a un grupo selecto de desarrolladores motivados. Resuelvan desafíos juntos, compartan experiencias y manténganse accountables mutuamente."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ff4d6d]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3zm12 0c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5s2.24-5 5-5h8c2.76 0 5 2.24 5 5z"/>
        </svg>
      ),
      title: "IA Aplicada",
      subtitle: "Implementación real con ChatGPT, Copilot, agentes",
      description: "Aprende a usar herramientas de IA de forma práctica en proyectos reales, desde pair programming hasta automatización de tareas repetitivas."
    }
  ];

  return (
    <section className="bg-[#f9f8f6] py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Mi <span className="text-[#ff4d6d]">Solución</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Un modelo de suscripción continua que combina mentoría personalizada, aprendizaje grupal y aplicación práctica de IA. Sin fecha de caducidad, evolucionando contigo mes a mes.
          </p>
        </div>

        {/* Tres Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.2)}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-[#ff4d6d] font-semibold mb-4 text-sm uppercase tracking-wide">
                {pillar.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action adicional */}
        <div 
          className={`text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(1.1)}
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              ¿Listo para transformar tu carrera?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              No esperes más. Cada día que pasa sin un plan claro es una oportunidad perdida en tu crecimiento profesional.
            </p>
            <a
              href="mailto:roberto@franzet.com?subject=Quiero información sobre mentoría"
              className="inline-flex items-center gap-3 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Empezar Mi Transformación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 