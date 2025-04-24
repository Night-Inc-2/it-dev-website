import { useEffect } from "react";

/**
 * Hook to animate elements on scroll
 * @param selector CSS selector for elements to animate
 * @param threshold Intersection threshold (0-1)
 */
const useScrollAnimation = (selector: string, threshold = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply animation classes
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          
          // Unobserve after animation is applied
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold, 
      rootMargin: "0px 0px -100px 0px" // Start animation slightly before element is in view
    });
    
    elements.forEach(el => {
      // Set initial state
      el.classList.add("opacity-0");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [selector, threshold]);
};

export default useScrollAnimation;
