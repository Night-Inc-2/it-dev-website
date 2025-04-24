import { useEffect } from 'react';

/**
 * Hook to animate elements when they enter the viewport
 * @param selector CSS selector for elements to animate
 * @param threshold IntersectionObserver threshold (0-1)
 * @param animationClass Class to add when element is in view
 */
export const useScrollAnimation = (
  selector: string, 
  threshold: number = 0.1, 
  animationClass: string = 'animate-fade-up'
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, threshold, animationClass]);
};

export default useScrollAnimation;
