// Animation classname constants
export const ANIMATIONS = {
  FADE_IN: 'animate-fadeIn',
  FADE_OUT: 'animate-fadeOut',
  SLIDE_DOWN: 'animate-slideDown',
  SLIDE_UP: 'animate-slideUp',
  FADE_IN_RIGHT: 'animate-fadeInRight',
  FADE_IN_LEFT: 'animate-fadeInLeft',
  SCALE_IN: 'animate-scaleIn',
  BLUR_IN: 'animate-blurIn',
};

// Animation delay utility
export const getAnimationDelay = (seconds: number) => {
  return { animationDelay: `${seconds}s` };
};

// Handles animation transitions with optional callback
export const handleAnimation = (
  setAnimationClass: (className: string) => void,
  animationClass: string, 
  callback?: () => void, 
  duration: number = 350
) => {
  setAnimationClass(animationClass);
  if (callback) {
    setTimeout(callback, duration);
  }
}; 