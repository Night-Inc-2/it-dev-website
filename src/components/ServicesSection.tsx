
import { Settings, CodeXml, HeartHandshake, History } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <CodeXml className="h-12 w-12 text-primary" />,
      title: "Разработка ПО",
      description: "Создание индивидуальных программных решений под конкретные потребности вашего бизнеса."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Техническое обслуживание",
      description: "Комплексная поддержка и обслуживание IT-инфраструктуры вашей компании."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-primary" />,
      title: "Консультации",
      description: "Экспертные консультации по оптимизации IT-процессов и внедрению новых технологий."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для максимальной эффективности вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Поддержка 24/7</h3>
                <p className="text-gray-600 mb-6">
                  Наша команда технических специалистов доступна круглосуточно, 
                  чтобы оперативно решать любые вопросы и обеспечивать бесперебойную 
                  работу вашей IT-инфраструктуры.
                </p>
                <div className="flex items-center gap-4">
                  <History className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Время отклика</div>
                    <div className="text-gray-600">до 15 минут</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Наши гарантии</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white h-6 w-6 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p>Индивидуальный подход к каждому клиенту</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white h-6 w-6 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p>Соблюдение сроков и бюджета проекта</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-white h-6 w-6 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p>Прозрачность работы на всех этапах сотрудничества</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
