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
          Support My Work
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
          If my content and mentoring insights have helped you grow as a developer, consider buying me a coffee! ☕
        </p>
        
        <a
          href="https://coff.ee/franzet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#ff4d6d] hover:bg-[#e63c5e] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.83V21c0 .55.45 1 1 1s1-.45 1-1v-1.17c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10-3c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S9.5 3.17 9.5 4v4.68C6.63 9.36 5 11.93 5 15v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2z"/>
          </svg>
          Buy me a coffee
        </a>
        
        <p className="text-gray-500 text-xs mt-4">
          Your support helps me create more content and mentoring resources
        </p>
      </div>
    </section>
  );
} 