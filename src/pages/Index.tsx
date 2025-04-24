import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, ChevronRight, Users, Zap, Award, MessageSquare } from "lucide-react";

const Index = () => {
  // Scroll animation for page sections
  const useScrollAnimation = (selector: string) => {
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

      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, [selector]);
  };

  useScrollAnimation('.scroll-animate');

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      
      {/* Innovation Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-animate opacity-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 hover:shadow-2xl transform hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm border-white/50 text-white">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <img 
                  src="/placeholder.svg" 
                  alt="Инновации в действии" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            </div>
            
            <div className="scroll-animate opacity-0">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Инновации на каждом уровне</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Наши технологии созданы с учетом последних достижений в области компьютерной инженерии и программного обеспечения. 
                Мы не просто следуем тенденциям — мы создаем их.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Высокая производительность</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Используем только самые современные компоненты</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Высокое качество</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Каждое устройство проходит строгий контроль</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Опытная команда</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Эксперты с многолетним опытом работы</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Клиентская поддержка</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Всегда готовы ответить на ваши вопросы</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="group rounded-full transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Подробнее о технологиях
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Что говорят те, кто уже работает с нашими технологиями
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Смирнова",
                position: "IT-директор, ТехноГрад",
                quote: "Ноутбуки серии Pro X превзошли все наши ожидания. Высокая производительность и долгое время автономной работы позволили нашей команде повысить эффективность."
              },
              {
                name: "Александр Петров",
                position: "Технический директор, Инновейт",
                quote: "Системы TechEdge стали основой нашей инфраструктуры. Их надежность и масштабируемость обеспечивают стабильную работу всех критически важных процессов."
              },
              {
                name: "Мария Иванова",
                position: "Дизайнер, Креатив Студио",
                quote: "CloudBook изменил мой подход к работе. Теперь я могу творить где угодно, а синхронизация файлов происходит мгновенно. Лучшее решение для творческих профессионалов."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 scroll-animate opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-primary mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="inline-block mr-1">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <img 
                        src="/placeholder.svg" 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(128,0,255,0.2),transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(128,0,255,0.2),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Готовы к технологиям будущего?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Присоединяйтесь к тысячам компаний, которые уже используют наши решения для достижения новых высот.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Начать сейчас
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
