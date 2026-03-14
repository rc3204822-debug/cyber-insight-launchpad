import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de falar com o detetive particular em Brasília.")}
        className={`w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-gold hover:shadow-glow flex items-center justify-center transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
