import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface ProblemaSectionProps {
  contentLoaded: boolean;
}

export default function ProblemaSection({ contentLoaded }: ProblemaSectionProps) {
  const painPoints = [
    {
      icon: "🤖",
      title: "No sabes cómo integrar IA",
      description: "Tienes curiosidad por ChatGPT y Copilot, pero no sabes cómo aplicarlos en proyectos reales"
    },
    {
      icon: "💼",
      title: "Te cuesta destacar en entrevistas",
      description: "Sabes programar, pero no logras comunicar tu valor en procesos de selección técnicos"
    },
    {
      icon: "🗺️",
      title: "Falta de roadmap claro",
      description: "No tienes una ruta clara para crecer profesionalmente y no sabes qué aprender primero"
    },
    {
      icon: "⏱️",
      title: "Sientes que pierdes el tiempo",
      description: "Estudias mucho pero no ves resultados concretos en tu carrera profesional"
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            ¿Te sientes <span className="text-[#ff4d6d]">estancado</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sé exactamente por lo que estás pasando. Estos son los obstáculos más comunes que enfrentan los desarrolladores:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.1)}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Estadística/Testimonio */}
        <div 
          className={`bg-[#ff4d6d] rounded-2xl p-8 sm:p-12 text-white text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.9)}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-4xl sm:text-5xl font-bold mb-4">85%</div>
            <p className="text-xl sm:text-2xl mb-4">
              de los desarrolladores no saben cómo usar IA efectivamente en su trabajo diario
            </p>
            <p className="text-lg opacity-90">
              *Según encuesta de Stack Overflow 2024 - No te quedes atrás mientras otros avanzan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 