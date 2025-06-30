import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface RoadmapSectionProps {
  contentLoaded: boolean;
}

export default function RoadmapSection({ contentLoaded }: RoadmapSectionProps) {
  const roadmapSteps = [
    {
      number: 1,
      title: "Kick-off y Diagnóstico Permanente",
      description: "Revisión de tu nivel actual y objetivos. Ajuste mensual de metas SMART según tus avances y aspiraciones.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-blue-500",
      frequency: "Mensual"
    },
    {
      number: 2,
      title: "Círculo Mensual de Aprendizaje",
      description: "Ciclo rotativo de 6 meses con diferentes enfoques técnicos y profesionales.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-green-500",
      frequency: "Rotativo"
    },
    {
      number: 3,
      title: "Revisión y Reajuste Continuo",
      description: "Sesión mensual de feedback: qué funcionó, qué retos surgieron y ajustes para el siguiente ciclo.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-purple-500",
      frequency: "Mensual"
    },
    {
      number: 4,
      title: "Escala tu Propio Camino",
      description: "Añade módulos especializados on-demand según tus metas profesionales y decide cuándo profundizar o pivotar.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-orange-500",
      frequency: "A demanda"
    }
  ];

  const monthlyCircle = [
    {
      month: "Mes 1",
      title: "Fundamentos y Buenas Prácticas",
      description: "Arquitectura, git avanzado, testing y código limpio",
      color: "bg-red-100 text-red-800"
    },
    {
      month: "Mes 2", 
      title: "Dominio de la IA en Desarrollo",
      description: "Prompts avanzados, integración de Copilot/ChatGPT y agentes básicos",
      color: "bg-blue-100 text-blue-800"
    },
    {
      month: "Mes 3",
      title: "DevOps & CI/CD",
      description: "Pipelines con GitHub Actions, Docker y despliegues automatizados",
      color: "bg-green-100 text-green-800"
    },
    {
      month: "Mes 4",
      title: "Product-Mindset e Impacto",
      description: "Métricas, priorización de features y validación de hipótesis",
      color: "bg-purple-100 text-purple-800"
    },
    {
      month: "Mes 5",
      title: "Preparación de Entrevistas",
      description: "Entrevistas técnicas, system design, simulacros con feedback",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      month: "Mes 6+",
      title: "Especializaciones a tu Ritmo",
      description: "Microservicios, ML Ops, desarrollo móvil con IA, o cualquier tema que elijas",
      color: "bg-gray-100 text-gray-800"
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
            Roadmap de <span className="text-[#ff4d6d]">Crecimiento Continuo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            En lugar de un punto de inicio y fin, tu suscripción está diseñada como un ciclo de mejora permanente. 
            Cada mes eliges el foco, y te acompaño en tu aprendizaje y aplicación práctica, sin fecha de caducidad.
          </p>
        </div>

        {/* Roadmap Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.1)}
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                {step.icon}
              </div>
              <div className="bg-[#ff4d6d] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {step.description}
              </p>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {step.frequency}
              </div>
            </div>
          ))}
        </div>

        {/* Círculo Mensual de Aprendizaje */}
        <div 
          className={`mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.9)}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Círculo Mensual de Aprendizaje
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyCircle.map((month, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
                style={getAnimationDelay(1.0 + index * 0.1)}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${month.color}`}>
                  {month.month}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  {month.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {month.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 