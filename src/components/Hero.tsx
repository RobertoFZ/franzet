import Image from "next/image";
import Button from "./Button";
import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface HeroProps {
  contentLoaded: boolean;
}

export default function Hero({ contentLoaded }: HeroProps) {
  return (
    <main className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div 
        className={`order-2 md:order-1 text-center md:text-left transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN_RIGHT : 'opacity-0'}`} 
        style={getAnimationDelay(0.3)}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <div className="mb-2">I&apos;m <span className="bg-[#ff4d6d] text-white px-3 sm:px-4 py-1 sm:py-2 inline-block">Roberto Franco</span>-</div>
          <div className="mb-2">your growth partner in software engineering</div>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
          Senior software engineer and tech lead specializing in revenue management systems, AI integration, and developer mentoring. From confused PRs to confidently shipping production code, I&apos;ll guide you every sprint of the way.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start">
          <Button href="mailto:roberto@franzet.com" variant="primary">
            Book a strategy session
          </Button>
          <Button href="/projects" variant="secondary">
            View My Products
          </Button>
        </div>
        
        {/* Additional SEO content */}
        <div className="mt-8 text-xs text-gray-500 hidden">
          <p>Roberto Franco - Software Engineering Mentor, Tech Lead, AI Developer, JavaScript Expert, TypeScript Specialist, React Developer, Next.js Expert, Career Coach for Software Engineers</p>
        </div>
      </div>
      <div 
        className={`relative order-1 md:order-2 flex justify-center md:justify-end mb-10 md:mb-0 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.SCALE_IN : 'opacity-0'}`} 
        style={getAnimationDelay(0.2)}
      >
        <Image
          src="/avatar.svg"
          alt="Roberto Franco - Software Engineering Mentor and Tech Lead"
          width={500}
          height={500}
          priority
          className="rounded-3xl shadow-xl w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
        />
      </div>
    </main>
  );
} 