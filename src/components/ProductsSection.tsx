
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Laptop, Shield, Cpu } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Корпоративные системы",
      description: "Комплексные решения для автоматизации и оптимизации бизнес-процессов вашей компании.",
      features: ["Безопасность", "Масштабируемость", "Интеграция"]
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Бизнес-ноутбуки",
      description: "Высокопроизводительные ноутбуки, разработанные специально для корпоративного использования.",
      features: ["Производительность", "Мобильность", "Долговечность"]
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Защищенные решения",
      description: "Системы с повышенным уровнем безопасности для критически важной корпоративной информации.",
      features: ["Шифрование", "Контроль доступа", "Аудит"]
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши продукты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Инновационные решения для бизнеса любого масштаба, от стартапа до корпорации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{product.icon}</div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
