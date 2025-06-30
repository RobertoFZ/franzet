import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface ServiciosSectionProps {
  contentLoaded: boolean;
}

export default function ServiciosSection({ contentLoaded }: ServiciosSectionProps) {
  const services = [
    {
      type: "individual",
      title: "Coaching Individual",
      subtitle: "Suscripción de crecimiento continuo",
      description: "4 sesiones mensuales de 60 minutos con roadmap personalizado que evoluciona contigo",
      features: [
        "Roadmap de crecimiento continuo sin fecha límite",
        "Ajuste mensual de objetivos según tus avances",
        "Acceso al círculo completo de aprendizaje (6 meses + especializaciones)",
        "Revisión y feedback de código en vivo",
        "Acceso directo vía WhatsApp 24/7",
        "Recursos exclusivos y plantillas actualizadas",
        "Métricas de progreso y seguimiento personalizado"
      ],
      earlyBirdPrice: "$299 USD",
      regularPrice: "$399 USD",
      period: "mes",
      popular: true,
      ctaText: "Empezar Mi Coaching",
      ctaHref: "https://buy.stripe.com/aFafZidqN4ri1xp9eGcV200"
    },
    {
      type: "grupal",
      title: "Mastermind Grupal \"IA\"",
      subtitle: "Comunidad continua de desarrolladores élite",
      description: "8 sesiones mensuales de 90 minutos con ciclo rotativo de especialización",
      features: [
        "Ciclo rotativo mensual de aprendizaje especializado",
        "Acceso completo a especializaciones on-demand",
        "Slack privado exclusivo con recursos continuos",
        "Proyectos colaborativos con IA y portfolio building",
        "Simulacros de entrevistas y system design",
        "Networking profesional y accountability grupal",
        "Revisión continua y reajuste de objetivos"
      ],
      earlyBirdPrice: "$199 USD",
      regularPrice: "$299 USD",
      period: "mes",
      popular: false,
      ctaText: "Quiero Más Información",  
      ctaHref: "mailto:roberto@franzet.com?subject=Quiero información sobre Mastermind grupal"
    }
  ];

  return (
    <section id="servicios" className="bg-white py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Modelos de <span className="text-[#ff4d6d]">Suscripción</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Elige tu modelo de crecimiento continuo. Sin fecha de caducidad, sin límites en tu desarrollo profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.type}
              className={`relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular ? 'border-[#ff4d6d] ring-4 ring-[#ff4d6d]/20' : 'border-gray-200'
              } ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.2)}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#ff4d6d] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-[#ff4d6d] font-semibold mb-4 text-sm uppercase tracking-wide">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {service.earlyBirdPrice}
                    </span>
                    <span className="text-xl text-gray-500">
                      /{service.period}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-500 line-through">
                      {service.regularPrice}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      EARLY BIRD
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      ∞ SIN FECHA LÍMITE
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Tu suscripción incluye:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={service.ctaHref}
                className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  service.popular
                    ? 'bg-[#ff4d6d] hover:bg-[#e63c5e] text-white shadow-lg'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {service.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Flexibilidad de Suscripción */}
        <div 
          className={`bg-white rounded-2xl p-8 sm:p-12 text-center shadow-lg mt-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.9)}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              Flexibilidad Total en tu Suscripción
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pausa cuando quieras</h4>
                <p className="text-gray-600 text-sm">Pausa tu suscripción temporalmente si necesitas un descanso</p>
              </div>
              <div>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cambia de modalidad</h4>
                <p className="text-gray-600 text-sm">Alterna entre individual y grupal según tus necesidades</p>
              </div>
              <div>
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Especialízate a tu ritmo</h4>
                <p className="text-gray-600 text-sm">Añade especializaciones cuando te sientas listo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div 
          className={`mt-16 text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.9)}
        >
          <div className="bg-[#f9f8f6] rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              ¿No estás seguro cuál elegir?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda una llamada gratuita de 30 minutos y te ayudo a elegir el modelo de suscripción que mejor se adapte a tus objetivos de crecimiento continuo.
            </p>
            <a
              href="mailto:roberto@franzet.com?subject=Consulta sobre modelos de suscripción"
              className="inline-flex items-center gap-2 text-[#ff4d6d] hover:text-[#e63c5e] font-semibold transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Agendar Llamada Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 