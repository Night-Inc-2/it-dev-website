import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Laptop, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 opacity-0 animate-fade-in"
          >
            <Laptop className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">TechPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Главная", "Системы", "Ноутбуки", "Услуги", "О нас"].map((item, index) => (
              <Link 
                key={item}
                to={item === "Главная" ? "/" : `/${item.toLowerCase()}`}
                className={`text-sm font-medium opacity-0 animate-fade-in hover:opacity-70 transition-opacity duration-200 ${
                  scrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-white"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </Link>
            ))}
          </div>

          <Button 
            variant="default" 
            className="hidden md:flex rounded-full opacity-0 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            Связаться
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 glass-effect mt-4 rounded-2xl p-4 animate-scale-in">
            {["Главная", "Системы", "Ноутбуки", "Услуги", "О нас"].map((item, i) => (
              <Link 
                key={item}
                to={item === "Главная" ? "/" : `/${item.toLowerCase()}`}
                className="block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="w-full mt-4 rounded-full"
            >
              Связаться
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
