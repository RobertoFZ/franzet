import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { ANIMATIONS, handleAnimation } from "@/utils/animations";

interface NavbarProps {
  contentLoaded: boolean;
}

export default function Navbar({ contentLoaded }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuAnimationClass, setMenuAnimationClass] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  
  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Start closing animation
      handleAnimation(setMenuAnimationClass, ANIMATIONS.SLIDE_UP, () => {
        setMobileMenuOpen(false);
      });
    } else {
      setMobileMenuOpen(true);
      setMenuAnimationClass(ANIMATIONS.SLIDE_DOWN);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && mobileMenuOpen) {
        toggleMobileMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, toggleMobileMenu]);
  
  const animateButton = () => {
    setIsButtonAnimating(true);
    setTimeout(() => setIsButtonAnimating(false), 300);
  };

  const handleMenuButtonClick = () => {
    animateButton();
    toggleMobileMenu();
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`max-w-6xl mx-auto bg-white rounded-full shadow-lg p-3 sm:p-4 flex justify-between items-center overflow-hidden relative ${contentLoaded ? ANIMATIONS.BLUR_IN : 'opacity-0'}`}>
        <div className="flex items-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={36}
              height={36}
              priority
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10"
            />
          </Link>
          <button 
            className={`md:hidden ml-2 p-2 transition-transform ${isButtonAnimating ? 'scale-90' : ''}`}
            aria-label="Menu" 
            onClick={handleMenuButtonClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="sm" fullWidthMobile={false}>
              Book a Session
            </Button>
          </div>
          <Button href="#contact" variant="icon">
            <Image
              src="/email.svg"
              alt="Contact"
              width={24}
              height={24}
              priority
              className="invert w-5 h-5 sm:w-6 sm:h-6"
            />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          ref={menuRef}
          className={`md:hidden max-w-6xl mx-auto bg-white mt-2 rounded-xl shadow-lg p-4 flex flex-col gap-4 overflow-hidden ${menuAnimationClass}`}
        >
          <Button href="#contact" variant="primary">
            Book a Free Session
          </Button>
        </div>
      )}
    </>
  );
} 