import Link from "next/link";
import { ANIMATIONS, getAnimationDelay } from "@/utils/animations";

interface NavbarProps {
  contentLoaded: boolean;
}

export default function Navbar({ contentLoaded }: NavbarProps) {
  return (
    <nav 
      className={`max-w-6xl mx-auto mb-8 transition-opacity duration-700 ${contentLoaded ? ANIMATIONS.FADE_IN : 'opacity-0'}`}
      style={getAnimationDelay(0.1)}
    >
      <div className="flex justify-end items-center">
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-[#ff4d6d] transition-colors duration-300 font-medium"
          >
            Inicio
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-[#ff4d6d] transition-colors duration-300 font-medium"
          >
            Productos
          </Link>
          <Link 
            href="mailto:roberto@franzet.com"
            className="bg-[#ff4d6d] hover:bg-[#e63c5e] text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
} 