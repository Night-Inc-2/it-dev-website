import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, Moon, Code, MenuIcon, X, Star } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 glass-effect border-b border-primary/10" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <span className="relative h-8 w-8 animate-slow-spin">
            <Moon className="h-8 w-8 absolute text-primary transform rotate-0" fill="rgba(156, 135, 245, 0.2)" />
            <span className="absolute h-1 w-1 rounded-full bg-white top-2 right-2.5 animate-pulse"></span>
            <span className="absolute inset-0 opacity-60 blur-md bg-primary rounded-full animate-pulse"></span>
          </span>
          <span className="font-bold text-2xl tracking-tight text-gradient font-sf text-foreground">
            Night
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="link" asChild>
            <Link to="#products" className="text-foreground/80 hover:text-primary transition-colors">
              Продукты
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Услуги
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="#innovation" className="text-foreground/80 hover:text-primary transition-colors">
              Инновации
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="#about" className="text-foreground/80 hover:text-primary transition-colors">
              О нас
            </Link>
          </Button>
          <ThemeToggle />
          <Button variant="default" size="sm" className="ml-4">
            Связаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <MenuIcon className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-primary/10 ${
          isOpen 
            ? "max-h-[400px] py-4 opacity-100" 
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="#products" onClick={() => setIsOpen(false)}>
              <Laptop className="mr-2 h-4 w-4 text-primary" />
              Продукты
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="#services" onClick={() => setIsOpen(false)}>
              <Star className="mr-2 h-4 w-4 text-primary" />
              Услуги
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="#innovation" onClick={() => setIsOpen(false)}>
              <Code className="mr-2 h-4 w-4 text-primary" />
              Инновации
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <Link to="#about" onClick={() => setIsOpen(false)}>
              <Moon className="mr-2 h-4 w-4 text-primary" fill="rgba(156, 135, 245, 0.2)" />
              О нас
            </Link>
          </Button>
          <Button variant="default" className="w-full" onClick={() => setIsOpen(false)}>
            Связаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
