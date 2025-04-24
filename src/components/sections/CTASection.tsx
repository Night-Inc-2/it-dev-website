import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
