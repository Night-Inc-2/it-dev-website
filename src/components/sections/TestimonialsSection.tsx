import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ content, author, role, company }: TestimonialCardProps) => (
  <div className="p-6 bg-card/50 rounded-xl border border-border/30 h-full flex flex-col">
    <Quote className="h-8 w-8 text-primary/40 mb-4" />
    <p className="text-card-foreground/90 mb-6 flex-grow">{content}</p>
    <div className="mt-auto">
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-muted-foreground">
        {role}, {company}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      content: "Ноутбуки Night стали неотъемлемой частью нашего рабочего процесса. Скорость, надежность и безопасность на высочайшем уровне. Всем рекомендую!",
      author: "Алексей Петров",
      role: "CTO",
      company: "DigiTech Solutions"
    },
    {
      content: "Мы перевели всю IT-инфраструктуру компании на решения Night. Результат превзошел все ожидания — производительность выросла на 40%.",
      author: "Елена Соколова",
      role: "IT-директор",
      company: "GreenEnergy"
    },
    {
      content: "Невероятная поддержка и внимание к деталям. Night не просто продает оборудование, они создают полноценные решения с учетом всех потребностей клиента.",
      author: "Максим Новиков",
      role: "Дизайнер",
      company: "CreativeMinds"
    },
    {
      content: "Моя команда разработчиков перешла на ноутбуки Night Pro — эффективность работы повысилась, а время компиляции сократилось втрое!",
      author: "Ирина Волкова",
      role: "Lead Developer",
      company: "SoftLab"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(testimonials.length / 2) - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1
    );
  };
  
  // Auto-scroll carousel with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseenter", () => clearInterval(interval));
      carousel.addEventListener("mouseleave", () => {
        clearInterval(interval);
        const newInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(newInterval);
      });
    }
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // Scroll animation
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
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-card/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h4 className="text-primary font-medium mb-2 text-sm md:text-base scroll-animate opacity-0">
            ОТЗЫВЫ КЛИЕНТОВ
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 scroll-animate opacity-0">
            Что говорят о Night
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto scroll-animate opacity-0">
            Наши клиенты ценят надежность, производительность и инновационность 
            решений Night, которые помогают им достигать новых высот.
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className="relative scroll-animate opacity-0"
        >
          <div 
            className="overflow-hidden"
            style={{
              transition: "transform 0.5s ease-in-out"
            }}
          >
            <div 
              className="flex flex-wrap -mx-3 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <Button 
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="rounded-full h-10 w-10 border-primary/30 text-primary hover:bg-primary/5"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Предыдущий</span>
            </Button>
            
            <Button 
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="rounded-full h-10 w-10 border-primary/30 text-primary hover:bg-primary/5"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Следующий</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
