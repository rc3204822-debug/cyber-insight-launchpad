import { Phone, Shield } from "lucide-react";

const ConversionBanner = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-border py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-between text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="hidden md:flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-primary" />
            Sigilo Profissional Garantido
          </span>
          <span className="w-px h-3 bg-border" />
          <span>Atendimento 24h</span>
        </div>
        <div className="flex items-center gap-2 text-foreground font-medium mx-auto md:mx-0">
          <Phone className="w-3.5 h-3.5 text-primary" />
          <a href="tel:+556133563925" className="hover:text-primary transition-colors">
            (61) 3356-3925
          </a>
          <span className="text-muted-foreground hidden sm:inline">— WhatsApp disponível</span>
        </div>
      </div>
    </div>
  );
};

export default ConversionBanner;
