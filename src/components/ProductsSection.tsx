import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const ProductCard = ({ 
  title, 
  description, 
  image, 
  features, 
  reversed = false,
  delay = 0
}: { 
  title: string;
  description: string;
  image: string;
  features: string[];
  reversed?: boolean;
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-12 items-center opacity-0`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`${reversed ? "md:order-2" : ""}`}>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-primary shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="group rounded-full transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className={`${reversed ? "md:order-1" : ""} relative`}>
        <div className="relative transform transition-transform duration-700 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl -m-4 group-hover:from-primary/20 transition-all duration-500"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl"
          />
          
          {/* Product highlight tag */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full">
            Новинка
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Наши продукты</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Инновационные устройства, созданные для того, чтобы превзойти ваши ожидания
          </p>
        </div>
        
        <div className="space-y-24">
          <ProductCard 
            title="Серия Pro X - Профессиональные ноутбуки"
            description="Ультратонкие и мощные ноутбуки, созданные для профессионалов. Непревзойденная производительность в элегантном корпусе."
            image="/placeholder.svg"
            features={[
              "Процессор нового поколения",
              "До 32 ГБ унифицированной памяти",
              "Ретина-дисплей с True Tone",
              "До 24 часов работы от батареи"
            ]}
            delay={100}
          />
          
          <ProductCard 
            title="TechEdge - Системы для бизнеса"
            description="Высокопроизводительные рабочие станции, оптимизированные для корпоративных задач и креативных рабочих процессов."
            image="/placeholder.svg"
            features={[
              "Многоядерные конфигурации",
              "Производительная графика",
              "Расширенные возможности подключения",
              "Модульная конструкция"
            ]}
            reversed={true}
            delay={200}
          />
          
          <ProductCard 
            title="CloudBook - Ультрапортативные решения"
            description="Легкие и компактные ноутбуки для работы в движении с передовыми облачными возможностями."
            image="/placeholder.svg"
            features={[
              "Вес менее 1 кг",
              "Мгновенная синхронизация",
              "Универсальная совместимость",
              "Бесшовная интеграция сервисов"
            ]}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
