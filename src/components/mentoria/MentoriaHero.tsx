import Button from "../Button";
import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface MentoriaHeroProps {
  contentLoaded: boolean;
}

export default function MentoriaHero({ contentLoaded }: MentoriaHeroProps) {
  return (
    <main className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div 
        className={`order-2 md:order-1 text-center md:text-left transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN_RIGHT : 'opacity-0'}`} 
        style={getAnimationDelay(0.3)}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <div className="mb-4">Impulsa tu <span className="bg-[#ff4d6d] text-white px-3 sm:px-4 py-1 sm:py-2 inline-block">Carrera como Desarrollador</span></div>
          <div className="mb-2">con Coaching Personalizado</div>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-lg sm:text-xl">
          Suscripción de crecimiento continuo para dominar <strong>Software + IA</strong> y evolucionar sin límites de tiempo.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
          <Button href="https://buy.stripe.com/aFafZidqN4ri1xp9eGcV200" variant="primary">
            Empezar Mi Coaching
          </Button>
          <Button href="#servicios" variant="secondary">
            Ver Servicios
          </Button>
        </div>
        
        {/* Badges adicionales */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Empieza inmediatamente
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin compromisos
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Resultados garantizados
          </div>
        </div>
      </div>
      
      <div 
        className={`relative order-1 md:order-2 flex justify-center md:justify-end mb-10 md:mb-0 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.SCALE_IN : 'opacity-0'}`} 
        style={getAnimationDelay(0.2)}
      >
        {/* Ilustración dinámica con código y elementos IA */}
        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
          {/* Círculo de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d6d]/20 to-[#ff4d6d]/10 rounded-full"></div>
          
          {/* Elementos flotantes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Developer icon */}
              <div className="w-32 h-32 bg-[#ff4d6d] rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">🤖</span>
              </div>
              
              <div className="absolute -bottom-4 -left-12 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-lg">⚡</span>
              </div>
              
              <div className="absolute top-16 -right-16 w-14 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 