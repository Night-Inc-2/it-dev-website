import { useEffect, useRef } from "react";
import { 
  Settings, Cloud, Shield, RotateCcw, Code, Star, 
  Cpu, MonitorSmartphone, Network, Database, Headphones, Zap
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
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
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 opacity-0 group"
      style={{ animationDelay: `${100 * index}ms` }}
    >
      <div className="p-4 rounded-full inline-block bg-gray-100 dark:bg-gray-700 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Разработка ПО",
      description: "Индивидуальная разработка программного обеспечения для ваших бизнес-задач."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Облачные решения",
      description: "Интеграция и настройка облачных сервисов для оптимизации рабочих процессов."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "IT-безопасность",
      description: "Защита вашей инфраструктуры и данных от современных угроз."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Аппаратные решения",
      description: "Проектирование и внедрение серверных и компьютерных систем."
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      title: "Разработка интерфейсов",
      description: "Создание интуитивных и эффективных пользовательских интерфейсов."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Сетевая инфраструктура",
      description: "Построение надежных и масштабируемых сетевых решений."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Управление данными",
      description: "Оптимизация хранения и обработки больших объемов информации."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Техническая поддержка",
      description: "Круглосуточная поддержка и быстрое решение проблем."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Оптимизация производительности",
      description: "Повышение скорости и эффективности работы ваших систем."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Полный спектр IT-услуг для вашего бизнеса
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
    </section>
  );
};

export default ServicesSection;
