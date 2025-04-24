import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Zap, Award, Users, MessageSquare } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-primary/10 p-3 rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const InnovationSection = () => {
  return (
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
              <Feature 
                icon={<Zap className="h-6 w-6" />}
                title="Высокая производительность"
                description="Используем только самые современные компоненты"
              />
              
              <Feature 
                icon={<Award className="h-6 w-6" />}
                title="Высокое качество"
                description="Каждое устройство проходит строгий контроль"
              />
              
              <Feature 
                icon={<Users className="h-6 w-6" />}
                title="Опытная команда"
                description="Эксперты с многолетним опытом работы"
              />
              
              <Feature 
                icon={<MessageSquare className="h-6 w-6" />}
                title="Клиентская поддержка"
                description="Всегда готовы ответить на ваши вопросы"
              />
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
  );
};

export default InnovationSection;
