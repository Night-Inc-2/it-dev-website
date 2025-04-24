import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation with Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animated = sectionRef.current?.querySelectorAll('.scroll-animate');
          animated?.forEach(el => {
            el.classList.add('animate-fade-up');
            el.classList.remove('opacity-0');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  
  // Parallax effect on scroll
  useEffect(() => {
    if (!ctaRef.current) return;
    
    const handleScroll = () => {
      if (!ctaRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = ctaRef.current.getBoundingClientRect().top + scrollY;
      const offset = (scrollY - sectionTop) * 0.1;
      
      if (offset > -100 && offset < 100) {
        ctaRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="cta" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12 border border-primary/10 relative overflow-hidden scroll-animate opacity-0"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы к следующему шагу <br />
                в цифровой эволюции?
              </h2>
              <p className="text-lg text-card-foreground/80 max-w-2xl mx-auto">
                Свяжитесь с нами для консультации или закажите демонстрацию продукта.
                Наши эксперты помогут подобрать оптимальное решение для ваших задач.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 rounded-full w-full sm:w-auto">
                Заказать демонстрацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 rounded-full border-primary/30 w-full sm:w-auto">
                Связаться с экспертом
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
