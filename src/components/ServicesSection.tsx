import { useRef, useEffect } from "react";
import { Shield, Cpu, CloudLightning, Code, AlarmCheck, Headphones } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <div 
      className="group p-6 bg-card/50 border border-border/40 rounded-xl hover:border-primary/20 hover:bg-card/80 transition-all duration-300 scroll-animate opacity-0"
      style={{ animationDelay: `${150 * index}ms` }}
    >
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Безопасность уровня предприятия",
      description: "Защита данных и устройств с использованием передовых технологий шифрования и биометрических систем."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Индивидуальная конфигурация",
      description: "Создайте систему, отвечающую вашим конкретным потребностям, с оптимизированными компонентами."
    },
    {
      icon: <CloudLightning className="h-6 w-6" />,
      title: "Облачная интеграция",
      description: "Бесшовное подключение к облачным сервисам для синхронизации данных и расширения возможностей."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Программные решения",
      description: "Разработка специализированного ПО для оптимизации бизнес-процессов и повышения эффективности."
    },
    {
      icon: <AlarmCheck className="h-6 w-6" />,
      title: "Расширенная гарантия",
      description: "Комплексное обслуживание и расширенная гарантия для безотказной работы вашего оборудования."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Круглосуточная поддержка",
      description: "Персональный менеджер и техническая поддержка 24/7 для оперативного решения задач."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Gradient background effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-primary font-medium mb-2 text-sm md:text-base scroll-animate opacity-0">
            НАШИ УСЛУГИ
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0">
            Полный спектр IT-решений
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto scroll-animate opacity-0">
            Night предлагает комплексные услуги для бизнеса и частных клиентов, 
            от настройки оборудования до разработки специализированных решений.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
};

export default ServicesSection;
