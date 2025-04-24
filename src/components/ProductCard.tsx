import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  price: string;
  isNew?: boolean;
}

const ProductCard = ({
  title,
  description,
  imageSrc,
  features,
  price,
  isNew = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    // Reset transform when mouse leaves
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl border border-border/40 bg-card hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-primary/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.2s ease"
      }}
    >
      {isNew && (
        <div className="absolute top-4 right-4 z-10 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
          Новинка
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-5 h-48 overflow-hidden rounded-lg bg-secondary/50 flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-primary/20 rounded-full p-1 mr-2 mt-0.5">
                <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-card-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-semibold">{price}</span>
          <Button size="sm" className="rounded-full">
            Подробнее
            <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div 
        className={`absolute -inset-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none`}
      ></div>
    </div>
  );
};

export default ProductCard;
