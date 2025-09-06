import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const ConversionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const handleWhatsAppClick = () => {
    const message = "🎯 Quero GARANTIR minha consulta GRATUITA antes que a oferta expire!";
    const url = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-semibold">OFERTA LIMITADA:</span>
          <span>Primeira consulta GRATUITA - Termina em:</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white text-red-600 hover:bg-gray-100"
            onClick={handleWhatsAppClick}
          >
            GARANTIR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConversionBanner;