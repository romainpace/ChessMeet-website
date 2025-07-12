// Optimized animation configurations for better performance

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

// Viewport settings for lazy animations
export const viewportSettings = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.3,
};

// Disable animations on reduced motion preference
export const shouldReduceMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
