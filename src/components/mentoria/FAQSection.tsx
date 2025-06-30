import { useState } from "react";
import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface FAQSectionProps {
  contentLoaded: boolean;
}

export default function FAQSection({ contentLoaded }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo funciona el modelo de suscripción continua?",
      answer: "Tu suscripción no tiene fecha de caducidad. Cada mes eliges el foco de aprendizaje dentro del círculo rotativo de 6 meses (Fundamentos, IA, DevOps, Product-Mindset, Entrevistas, Especializaciones, etc). Una vez inscrito, recibirás acceso a mi calendario personal para agendar sesiones, y puedes pausar o cambiar de modalidad cuando lo necesites."
    },
    {
      question: "¿Qué nivel necesito para suscribirme?",
      answer: "El programa está diseñado para desarrolladores con conocimientos básicos de programación. Si sabes HTML, CSS, JavaScript básico y has hecho algunos proyectos, ya tienes el nivel suficiente. El modelo de crecimiento continuo se adapta a tu nivel actual y evoluciona contigo mes a mes."
    },
    {
      question: "¿Puedo cambiar entre individual y grupal durante mi suscripción?",
      answer: "¡Absolutamente! Una de las ventajas del modelo de suscripción es la flexibilidad total. Puedes alternar entre Coaching Individual y Mastermind Grupal según tus necesidades, presupuesto y objetivos del mes. Solo necesitas avisarme con una semana de anticipación para hacer el cambio."
    },
    {
      question: "¿Cuál es la política de cancelación y reembolso?",
      answer: "Puedes pausar o cancelar tu suscripción en cualquier momento. Ofrezco una garantía de satisfacción de 30 días: si no estás completamente satisfecho con el valor que estás recibiendo, te devuelvo el 100% de tu dinero del primer mes, sin preguntas ni complicaciones."
    },
    {
      question: "¿Qué tecnologías cubres en el programa?",
      answer: "Me enfoco en el stack moderno: JavaScript/TypeScript, React, Node.js, Next.js, bases de datos (SQL y NoSQL), Git, y especialmente herramientas de IA como ChatGPT, GitHub Copilot, y agentes de código. También cubro fundamentos de DevOps, testing, y mejores prácticas de la industria. Las especializaciones incluyen microservicios, ML Ops, desarrollo móvil con IA, y más."
    },
    {
      question: "¿Cómo funciona el seguimiento de mi progreso?",
      answer: "Tienes acceso a un dashboard personalizado de métricas donde puedes ver tu progreso mes a mes. Incluye: compleción de retos, pull requests revisados, demos realizados, y objetivos SMART alcanzados. Cada mes hacemos una sesión de feedback para ajustar el roadmap según tus avances y nuevos objetivos."
    },
    {
      question: "¿Las sesiones quedan grabadas?",
      answer: "Todas las sesiones individuales quedan grabadas y las tienes disponibles por tiempo ilimitado mientras mantengas tu suscripción activa. Para el Mastermind Grupal, grabamos las sesiones técnicas y workshops, pero respetamos la privacidad del grupo en las dinámicas más personales."
    },
    {
      question: "¿Puedo acceder a especializaciones desde el primer mes?",
      answer: "Las especializaciones avanzadas (microservicios, ML Ops, etc.) están disponibles desde el mes 6+ del ciclo rotativo, pero puedes solicitarlas antes si demuestras dominio de los fundamentos. El sistema está diseñado para adaptarse a tu ritmo de aprendizaje, no al revés."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center mb-16 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Preguntas <span className="text-[#ff4d6d]">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resuelve todas tus dudas antes de dar el primer paso hacia tu transformación profesional
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.1)}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#ff4d6d] focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#ff4d6d] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div 
          className={`mt-16 text-center bg-[#f9f8f6] rounded-2xl p-8 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(1.3)}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-600 mb-6">
            No dudes en contactarme directamente. Respondo personalmente todos los mensajes en menos de 24 horas.
          </p>
          <a
            href="mailto:roberto@franzet.com?subject=Pregunta sobre programa de mentoría"
            className="inline-flex items-center gap-2 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Hacer Pregunta Directa
          </a>
        </div>
      </div>
    </section>
  );
} 