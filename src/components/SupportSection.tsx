import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface SupportSectionProps {
  contentLoaded: boolean;
}

export default function SupportSection({ contentLoaded }: SupportSectionProps) {
  return (
    <section className="max-w-6xl mx-auto mt-20 sm:mt-24 md:mt-32">
      <div 
        className={`bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
        style={getAnimationDelay(0.6)}
      >
        <div className="flex justify-center mb-6">
          <svg 
            className="w-12 h-12 text-[#ff4d6d]" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v3.01L12 10l7.5-3V5c0-1.1-.9-2-2-2zM12 13L2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9l-10 4z"/>
            <circle cx="7" cy="6.5" r="1.5"/>
            <circle cx="17" cy="6.5" r="1.5"/>
          </svg>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Apoya mi trabajo
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
          Si mi contenido y mis ideas de mentoría te han ayudado a crecer como desarrollador, ¡Reg&aacute;lame un café! ☕
        </p>
        
        <a
          href="https://coff.ee/franzet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          BuyMeACoffee
        </a>
        
        <p className="text-gray-500 text-xs mt-4">
          Tu apoyo me ayuda a crear más contenido y recursos de mentoría
        </p>
      </div>
    </section>
  );
} 