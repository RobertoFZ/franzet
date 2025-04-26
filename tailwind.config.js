/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4d6d',
        secondary: '#0078ff',
        background: '#f9f8f6',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeOut': 'fadeOut 0.3s ease-in-out forwards',
        'slideDown': 'slideDown 0.4s ease-in-out',
        'slideUp': 'slideUp 0.4s ease-in-out forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInRight': 'fadeInRight 0.8s ease-out',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'scaleIn': 'scaleIn 0.7s ease-out',
        'blurIn': 'blurIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
        slideDown: {
          '0%': { maxHeight: '0', opacity: 0 },
          '100%': { maxHeight: '300px', opacity: 1 },
        },
        slideUp: {
          '0%': { maxHeight: '300px', opacity: 1 },
          '100%': { maxHeight: '0', opacity: 0 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { opacity: 0, filter: 'blur(10px)' },
          '100%': { opacity: 1, filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
} 