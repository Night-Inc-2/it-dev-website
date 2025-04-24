import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation with Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animated = sectionRef.current?.querySelectorAll('.scroll-animate');
          animated?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-up');
              el.classList.remove('opacity-0');
            }, 150 * index);
          });
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h4 className="text-primary font-medium mb-2 text-sm md:text-base scroll-animate opacity-0">
              НАШИ ПРОДУКТЫ
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold scroll-animate opacity-0">
              Превосходя ожидания
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg scroll-animate opacity-0">
              Откройте для себя нашу линейку высокопроизводительных ноутбуков и 
              системных решений, созданных для самых требовательных задач.
            </p>
          </div>
          <Button variant="outline" className="scroll-animate opacity-0 rounded-full">
            Все продукты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="scroll-animate opacity-0">
            <ProductCard
              title="Night Pro 16"
              description="Профессиональный ноутбук для творческих задач"
              imageSrc="/placeholder.svg"
              features={[
                "32-ядерный процессор N1 Ultra",
                "32 ГБ унифицированной памяти",
                "1 ТБ SSD",
                "16-дюймовый Retina XDR-дисплей"
              ]}
              price="от 199 900 ₽"
              isNew={true}
            />
          </div>
          
          <div className="scroll-animate opacity-0">
            <ProductCard
              title="Night Air 13"
              description="Легкий и мощный ноутбук для повседневных задач"
              imageSrc="/placeholder.svg"
              features={[
                "16-ядерный процессор N1 Pro",
                "16 ГБ унифицированной памяти",
                "512 ГБ SSD",
                "13-дюймовый Retina-дисплей"
              ]}
              price="от 129 900 ₽"
            />
          </div>
          
          <div className="scroll-animate opacity-0">
            <ProductCard
              title="Night Studio"
              description="Настольная рабочая станция для профессионалов"
              imageSrc="/placeholder.svg"
              features={[
                "64-ядерный процессор N1 Max",
                "128 ГБ унифицированной памяти",
                "4 ТБ SSD",
                "Поддержка до 8 дисплеев"
              ]}
              price="от 349 900 ₽"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
