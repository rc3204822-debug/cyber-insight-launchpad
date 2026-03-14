import { Button } from "@/components/ui/button";
import { Shield, Lock, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import heroBackground from "@/assets/brasilia-hero-bg.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de agendar minha consulta com o detetive particular em Brasília.");
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsla(220, 15%, 5%, 0.92), hsla(220, 15%, 5%, 0.96)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle gold line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-10 rounded-full border-2 border-primary/30 flex items-center justify-center bg-card/50 backdrop-blur-sm">
            <img
              src="/lovable-uploads/fac86c3c-5386-47e2-b05f-625924171513.png"
              alt="Agência Investigue - Detetive Particular em Brasília"
              className="w-14 h-14 object-contain"
              loading="eager"
            />
          </div>

          {/* Headline */}
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Agência de Investigação Particular
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
            Detetive Particular
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">em Brasília</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Sigilo, ética e resultados reais. Mais de 15 anos de experiência em
            investigação conjugal, perícia digital forense e rastreamento no Distrito Federal.
          </p>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              500+ casos resolvidos
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary" />
              Sigilo absoluto
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="hidden sm:flex items-center gap-1.5">
              98% de sucesso
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold shadow-gold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar Agora no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+556133563925'}
              className="border-border text-foreground hover:bg-card text-base px-8 py-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone className="w-5 h-5 mr-2" />
              (61) 3356-3925
            </Button>
          </div>

          <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Consulta inicial gratuita · Atendimento 24 horas · Orçamento sem compromisso
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
