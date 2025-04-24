
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Laptop, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Laptop className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">ТехноПро</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Главная
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium">
                Продукты <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/systems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">
                  Системы
                </Link>
                <Link to="/laptops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">
                  Ноутбуки
                </Link>
              </div>
            </div>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium">
              Услуги
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Контакты
            </Link>
          </div>

          <Button variant="default" className="hidden md:flex">
            Связаться
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium py-2">
              Главная
            </Link>
            <div className="py-2">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium mb-1">
                Продукты <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 space-y-1">
                <Link to="/systems" className="block text-gray-600 hover:text-primary py-1">
                  Системы
                </Link>
                <Link to="/laptops" className="block text-gray-600 hover:text-primary py-1">
                  Ноутбуки
                </Link>
              </div>
            </div>
            <Link to="/services" className="block text-gray-700 hover:text-primary font-medium py-2">
              Услуги
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary font-medium py-2">
              О нас
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary font-medium py-2">
              Контакты
            </Link>
            <Button variant="default" className="w-full mt-2">
              Связаться
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
