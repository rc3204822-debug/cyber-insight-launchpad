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
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse border-4 border-green-400/50"
          >
            <MessageCircle className="w-10 h-10" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Tooltip */}
      {isVisible && (
        <div className="fixed bottom-28 right-6 z-40 hidden md:block">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl text-base font-bold animate-bounce border-2 border-green-400">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Consulta GRÁTIS Agora!</span>
            </div>
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-500 transform translate-y-full"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;