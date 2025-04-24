import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import InnovationSection from "@/components/sections/InnovationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

/**
 * Main landing page component for Night
 * Features modular sections with animations and interactive elements
 */
const Index = () => {
  const [contentVisible, setContentVisible] = useState(false);
  
  // Initialize scroll animations for page sections
  useScrollAnimation('.scroll-animate', 0.1);
  
  // Handle loading state and content visibility
  useEffect(() => {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Set content to visible after loading completes (4s)
    const showContentTimeout = setTimeout(() => {
      setContentVisible(true);
      document.body.classList.remove('loading');
    }, 4000);
    
    return () => {
      clearTimeout(showContentTimeout);
      document.body.classList.remove('loading');
    };
  }, []);
  
  // Set dark theme on first load
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Initialize cursor effects
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      const size = Math.random() * 10 + 5;
      
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.backgroundColor = 'rgba(123, 97, 255, 0.3)';
      cursor.style.borderRadius = '50%';
      cursor.style.position = 'fixed';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '9999';
      
      document.body.appendChild(cursor);
      
      setTimeout(() => {
        cursor.style.opacity = '0';
        cursor.style.transform = `scale(${Math.random() * 2 + 1})`;
        cursor.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
          document.body.removeChild(cursor);
        }, 500);
      }, 10);
    };
    
    // Only add cursor effect on non-touch devices
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (!('ontouchstart' in window)) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      className={`min-h-screen night-gradient transition-opacity duration-500 ${
        contentVisible ? 'loading-complete' : 'loading-active'
      }`}
    >
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <InnovationSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
