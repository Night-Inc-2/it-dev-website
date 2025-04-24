import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out after 3 seconds
    const fadeTimeout = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    // Complete removal after 4 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center z-50 night-gradient"
      style={{ 
        opacity, 
        transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <Shield className="h-16 w-16 text-primary animate-pulse" />
          <span className="absolute inset-0 blur-md bg-primary/30 rounded-full animate-pulse"></span>
        </div>
        
        <h1 className="text-3xl font-bold mt-8 mb-6 text-gradient">Night</h1>
        
        <div className="w-48 h-1 bg-secondary/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full"
            style={{
              animation: "loading 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite"
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            transform: translateX(0);
          }
          50% {
            width: 50%;
          }
          100% {
            width: 0%;
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
