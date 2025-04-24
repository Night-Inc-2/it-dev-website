import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ title, description, delay }: FeatureProps) => (
  <div 
    className="scroll-animate opacity-0 flex flex-col space-y-2" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const InnovationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="innovation" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary scroll-animate opacity-0">
              Инновации
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0">
              Технологии будущего <br />
              <span className="text-gradient">уже сегодня</span>
            </h2>
            <p className="text-muted-foreground mb-8 scroll-animate opacity-0">
              Мы создаем устройства с использованием передовых технологий, 
              обеспечивая непревзойденную производительность, эффективность 
              и долговечность в каждом компоненте.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Feature
                title="Нейронные процессоры"
                description="Специализированные чипы для задач искусственного интеллекта и машинного обучения."
                delay={150}
              />
              <Feature
                title="Квантовая память"
                description="Революционная технология хранения данных с невероятной скоростью доступа."
                delay={300}
              />
              <Feature
                title="Адаптивные дисплеи"
                description="Экраны, автоматически регулирующие параметры в зависимости от условий среды."
                delay={450}
              />
              <Feature
                title="Биометрическая защита"
                description="Многоуровневая система безопасности с использованием уникальных биометрических данных."
                delay={600}
              />
            </div>
            
            <Button size="lg" className="rounded-full scroll-animate opacity-0" style={{ animationDelay: "750ms" }}>
              Исследовать технологии
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right content - Device showcase */}
          <div className="relative scroll-animate opacity-0">
            <div className="bg-gradient-to-br from-primary/20 via-transparent to-primary/5 p-1 rounded-2xl">
              <div className="relative overflow-hidden rounded-xl bg-card/20 aspect-[4/3] flex items-center justify-center group">
                <img 
                  src="/placeholder.svg" 
                  alt="Night технологии" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating elements */}
                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-lg animate-float">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-lg font-semibold">N1</span>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Процессор</div>
                      <div className="text-sm font-medium">N1 Ultra Chip</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/20 shadow-lg animate-float delay-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary text-lg font-semibold">QM</span>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Память</div>
                      <div className="text-sm font-medium">Quantum Memory</div>
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 animate-glow opacity-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
