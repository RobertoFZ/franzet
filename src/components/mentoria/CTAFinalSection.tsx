import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface CTAFinalSectionProps {
  contentLoaded: boolean;
}

export default function CTAFinalSection({ contentLoaded }: CTAFinalSectionProps) {
  return (
    <section className="bg-gradient-to-br from-[#ff4d6d] to-[#e63c5e] py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div 
          className={`text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
          style={getAnimationDelay(0.4)}
        >
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Empieza Hoy tu
            <br />
            <span className="bg-white text-[#ff4d6d] px-4 py-2 inline-block rounded-2xl mt-4">
              Transformación
            </span>
          </h2>

          {/* Motivational Text */}
          <div 
            className={`max-w-4xl mx-auto mb-12 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
            style={getAnimationDelay(0.6)}
          >
            <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
              No esperes más. Cada mes que pasa sin un roadmap claro es una oportunidad perdida en tu crecimiento.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Mientras otros desarrolladores siguen estancados usando las mismas tecnologías de siempre, 
              tú estarás dominando IA, construyendo proyectos innovadores, y evolucionando continuamente sin límites de tiempo.
            </p>
          </div>

          {/* Urgency Elements */}
          <div 
            className={`flex flex-wrap justify-center gap-8 mb-12 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
            style={getAnimationDelay(0.8)}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-sm font-semibold">Crecimiento Continuo</div>
              <div className="text-xs opacity-80">Sin fecha de caducidad</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">🚀</div>
              <div className="text-sm font-semibold">Flexibilidad Total</div>
              <div className="text-xs opacity-80">Pausa o cambia cuando quieras</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">💡</div>
              <div className="text-sm font-semibold">Empieza Hoy</div>
              <div className="text-xs opacity-80">Sin complicaciones</div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div 
            className={`transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
            style={getAnimationDelay(1.0)}
          >
            <a
              href="https://buy.stripe.com/aFafZidqN4ri1xp9eGcV200"
              className="inline-flex items-center gap-4 bg-white hover:bg-gray-50 text-[#ff4d6d] font-bold text-xl px-12 py-6 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-6"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Empezar Mi Coaching Ahora
            </a>
            
            <div className="text-white/80 text-sm">
              💳 Pago seguro con Stripe • Empieza inmediatamente • Garantía 30 días
            </div>
          </div>

          {/* Final Message */}
          <div 
            className={`mt-12 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
            style={getAnimationDelay(1.4)}
          >
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              Roberto Franco · Tech Lead y Mentor de Ingeniería de Software
              <br />
              &ldquo;Tu crecimiento es mi compromiso. Trabajemos juntos para construir la carrera que mereces, a tu ritmo y sin límites.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 