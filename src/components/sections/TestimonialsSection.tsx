interface TestimonialProps {
  name: string;
  position: string;
  quote: string;
  index: number;
}

const TestimonialCard = ({ name, position, quote, index }: TestimonialProps) => {
  return (
    <div 
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
            "{quote}"
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Что говорят те, кто уже работает с нашими технологиями
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              quote={testimonial.quote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
