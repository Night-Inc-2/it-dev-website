
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, Target, Globe, Users, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О компании ТехноПро</h2>
              <p className="text-gray-600 mb-6">
                Наша компания специализируется на разработке и производстве высокотехнологичных 
                IT-решений для бизнеса. Мы сочетаем инновационные технологии, глубокую экспертизу 
                и индивидуальный подход к каждому клиенту.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Миссия</h3>
                    <p className="text-gray-600 text-sm">Создавать технологии, которые делают бизнес эффективнее</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">География</h3>
                    <p className="text-gray-600 text-sm">Работаем по всей России и странам СНГ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Команда</h3>
                    <p className="text-gray-600 text-sm">Более 120 профессионалов в штате</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BriefcaseIcon className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Опыт</h3>
                    <p className="text-gray-600 text-sm">12+ лет на рынке IT-решений</p>
                  </div>
                </div>
              </div>
              <Button className="flex items-center gap-1">
                Узнать больше <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="О компании" 
                className="rounded-lg shadow-lg w-full" 
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm">лет опыта</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать сотрудничество?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Свяжитесь с нами, чтобы обсудить ваши потребности и узнать, 
            как наши решения могут помочь вашему бизнесу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Заказать демонстрацию
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
