
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-primary overflow-hidden py-20 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Инновационные IT-решения для современного бизнеса
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Разработка передовых систем и производство высокопроизводительных ноутбуков, 
            которые помогают компаниям достигать новых высот.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Наши решения
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
