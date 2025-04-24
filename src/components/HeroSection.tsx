import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxItems = document.querySelectorAll('.parallax-item');
      
      parallaxItems.forEach((item) => {
        const speed = parseFloat((item as HTMLElement).dataset.speed || "0.05");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        (item as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 parallax-item" data-speed="0.03"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 parallax-item" data-speed="0.05"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 parallax-item" data-speed="0.07"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-16 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fade-up">
              <span className="block">Будущее технологий</span>
              <span className="block mt-2">уже здесь</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 opacity-0 animate-fade-up delay-150">
              Инновационные системы и ноутбуки, разработанные для новой эры цифровых возможностей.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
              <Button 
                size="lg" 
                className="rounded-full group transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Узнать больше 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Наши продукты
              </Button>
            </div>
          </div>
          
          <div ref={parallaxRef} className="relative select-none pointer-events-none opacity-0 animate-fade-up delay-500">
            <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 parallax-item" data-speed="0.02">
              <img 
                src="/placeholder.svg" 
                alt="Современный ноутбук" 
                className="w-full h-auto rounded-xl shadow-2xl"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15))"
                }}
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-float parallax-item" data-speed="0.07">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">+120%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">производительность</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-float parallax-item delay-700" data-speed="0.05" style={{animationDelay: "1s"}}>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24ч</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">автономность</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up delay-700">
          <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
