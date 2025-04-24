import { Link } from "react-router-dom";
import { Laptop, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Laptop className="h-7 w-7 text-white" />
              <span className="text-xl font-bold text-white">TechPro</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Создаем технологии, которые меняют мир к лучшему. Инновации, качество, надежность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Продукты</h3>
            <ul className="space-y-3">
              {["Ноутбуки", "Системы", "Серверы", "Аксессуары", "Программное обеспечение"].map(item => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              {["О нас", "Карьера", "Блог", "Партнеры", "Контакты"].map(item => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Связаться с нами</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                <span>Москва, ул. Технологическая, 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <span>info@techpro.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 pb-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Подпишитесь на новости</h3>
              <p className="text-gray-400">Будьте в курсе последних технологических новинок и предложений</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="shrink-0 rounded-md">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2023 TechPro. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Условия использования</Link>
            <Link to="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="#" className="hover:text-white transition-colors">Политика cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
