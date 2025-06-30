import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface PricingSectionProps {
  contentLoaded: boolean;
}

export default function PricingSection({ contentLoaded }: PricingSectionProps) {
  const plans = [
    {
      name: "Coaching Individual",
      description: "Suscripción de crecimiento continuo personalizada",
      price: "$299 USD",
      originalPrice: "$399 USD",
      period: "mes",
      popular: true,
      features: [
        "4 sesiones mensuales de 60 min",
        "Roadmap personalizado sin fecha límite",
        "Revisión de código y proyectos en vivo",
        "Acceso WhatsApp directo 24/7",
        "Recursos exclusivos actualizados",
        "Seguimiento mensual SMART y métricas",
        "Acceso completo a especializaciones"
      ],
      bonuses: [
        "🎁 Sesión extra de onboarding",
        "📚 Pack de plantillas IA actualizadas",
        "🔥 Acceso a comunidad privada",
        "📊 Dashboard de métricas personalizado"
      ],
      ctaText: "Empezar Mi Suscripción",
      ctaHref: "https://buy.stripe.com/aFafZidqN4ri1xp9eGcV200"
    },
    {
      name: "Mastermind Grupal",
      description: "Comunidad continua de desarrolladores élite",
      price: "$199 USD",
      originalPrice: "$299 USD",
      period: "mes",
      popular: false,
      features: [
        "8 sesiones mensuales de 90 min",
        "Grupo máximo 10 participantes",
        "Ciclo rotativo de especialización",
        "Slack privado exclusivo",
        "Simulacros de entrevistas continuos",
        "Proyectos colaborativos con IA",
        "Networking profesional permanente"
      ],
      bonuses: [
        "🎁 Workshop IA aplicada mensual",
        "📋 Kit de preparación entrevistas",
        "💼 Revisión de CV profesional",
        "🚀 Acceso a alumni network"
      ],
      ctaText: "Unirme a la Comunidad",
      ctaHref: "mailto:roberto@franzet.com?subject=Quiero suscripción mastermind grupal"
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
            Tu <span className="text-[#ff4d6d]">Suscripción</span> de Crecimiento
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Modelo de suscripción continua que evoluciona contigo. Sin fecha de caducidad, con precios especiales Early Bird.
          </p>
          
          {/* Nota de moneda */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              💵 Todos los precios están en dólares estadounidenses (USD)
            </p>
          </div>
          
          {/* Early Bird Alert */}
          <div className="bg-[#ff4d6d] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-6-6a1 1 0 00-1.414 1.414L9.586 8.5H6a1 1 0 100 2h3.586l-3.293 3.293a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Oferta Early Bird - Solo hasta fin de mes
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-4 border-[#ff4d6d] ring-4 ring-[#ff4d6d]/20 scale-105' : 'border border-gray-200'
              } ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
              style={getAnimationDelay(0.5 + index * 0.2)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#ff4d6d] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-500">/{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      AHORRA {Math.round((1 - parseInt(plan.price.replace('$', '').replace(' USD', '').replace(',', '')) / parseInt(plan.originalPrice.replace('$', '').replace(' USD', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium inline-block">
                    ∞ CRECIMIENTO CONTINUO
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 text-center">Tu suscripción incluye:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonuses */}
              <div className="bg-yellow-50 rounded-xl p-4 mb-8">
                <h4 className="font-semibold text-yellow-800 mb-3 text-center">Bonos de Suscripción:</h4>
                {plan.bonuses.map((bonus, bonusIndex) => (
                  <div key={bonusIndex} className="text-yellow-700 text-sm mb-1">
                    {bonus}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-[#ff4d6d] hover:bg-[#e63c5e] text-white shadow-lg'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 