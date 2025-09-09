import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const message = "Olá! Gostaria de agendar minha consulta GRATUITA de investigação cibernética.";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Tooltip */}
      {isVisible && (
        <div className="fixed bottom-24 right-6 z-40">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Consulta GRÁTIS no WhatsApp!</span>
            </div>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary transform translate-y-full"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;