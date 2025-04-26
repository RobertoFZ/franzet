import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidthMobile?: boolean;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidthMobile = true,
}: ButtonProps) {
  // Base classes shared by all buttons
  const baseClasses = "rounded-full flex items-center justify-center transition-all transform hover:scale-105";
  
  // Variant-specific classes
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-gray-300 text-black hover:border-gray-400",
    icon: "bg-black text-white p-2 shrink-0",
  };
  
  // Size-specific classes
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base",
    lg: "px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg",
  };
  
  // Width classes for mobile responsiveness
  const widthClasses = fullWidthMobile ? "w-full sm:w-auto" : "";
  
  // Combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    variant !== 'icon' ? sizeClasses[size] : '',
    widthClasses,
    className
  ].join(' ');
  
  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
} 