import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxElements = useRef<NodeListOf<Element> | null>(null);
  
  // Smooth scroll to section when clicking the scroll indicator
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax effect on mouse movement
  useEffect(() => {
    if (!heroRef.current) return;
    
    parallaxElements.current = heroRef.current.querySelectorAll(".parallax-element");
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxElements.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxElements.current.forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth") || "0.1");
        const moveX = (x - 0.5) * depth * 50;
        const moveY = (y - 0.5) * depth * 50;
        
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 overflow-hidden night-gradient flex flex-col items-center justify-center"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl parallax-element animate-float"
          data-depth="0.2"
        ></div>
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl parallax-element animate-float delay-500"
          data-depth="0.3"
        ></div>
        <div 
          className="absolute top-3/4 left-1/4 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl parallax-element animate-float delay-300"
          data-depth="0.1"
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <h4 className="text-primary font-medium mb-4 text-sm md:text-base animate-fade-up opacity-0 [animation-delay:150ms]">
          ИННОВАЦИИ В КАЖДОМ УСТРОЙСТВЕ
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-up opacity-0 [animation-delay:300ms]">
          <span className="block">Будущее технологий</span>
          <span className="block text-gradient">в ваших руках</span>
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8 text-lg animate-fade-up opacity-0 [animation-delay:450ms]">
          Night создает передовые ноутбуки и системы с лучшими технологиями,
          дизайном и производительностью — для тех, кто требует большего.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-up opacity-0 [animation-delay:600ms]">
          <Button size="lg" className="px-8 rounded-full">
            Исследовать продукты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full border-primary/30">
            Подробнее о Night
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity animate-fade-up opacity-0 [animation-delay:900ms]"
      >
        <span className="text-sm text-foreground/60 mb-2">Прокрутите вниз</span>
        <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
      </button>
      
      {/* Product image */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-3xl animate-fade-up opacity-0 [animation-delay:750ms]">
        <div className="relative w-full aspect-[16/9] parallax-element animate-float" data-depth="0.05">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
          <img 
            src="/placeholder.svg" 
            alt="Night Laptop Pro" 
            className="w-full h-auto object-cover opacity-90"
          />
          <div className="absolute inset-0 animate-glow rounded-2xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
