import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Zap, ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import TrustBadges from "./TrustBadges";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import heroBackground from "@/assets/brasilia-hero-bg.jpg";

const HeroSection = () => {
  const message = "Olá! Gostaria de agendar minha consulta GRATUITA com o detetive particular DF.";
  
  const handleWhatsAppClick = () => {
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  const handleEmergencyWhatsApp = () => {
    const emergencyMessage = "🚨 EMERGÊNCIA CIBERNÉTICA! Preciso de atendimento imediato. Caso urgente.";
    openWhatsApp(WHATSAPP_NUMBER, emergencyMessage);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-24 pb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow mx-auto mb-8">
              <img 
                src="/lovable-uploads/fac86c3c-5386-47e2-b05f-625924171513.png" 
                alt="Agência Investigue - Detetive Particular em Brasília" 
                className="w-24 h-24 object-contain"
                loading="eager"
              />
            </div>
            
            {/* Nova Frase de Impacto */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-gold bg-clip-text text-transparent block mb-2">
                Detetive Particular em Brasília
              </span>
              <span className="text-4xl md:text-5xl text-gray-300">
                Sigilo, Ética e Resultados Reais
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-primary">Investigador particular em Brasília DF</strong> especializado em 
              <strong className="text-white"> investigação conjugal</strong>, perícia digital forense e 
              <strong className="text-white"> rastreamento</strong>. Atendimento <strong className="text-primary">24h</strong> no Distrito Federal.
            </p>

            {/* Diferenciais Rápidos */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm md:text-base">
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full border border-primary/30">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white"><strong>500+</strong> casos resolvidos</span>
              </div>
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full border border-primary/30">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white"><strong>72h</strong> resultados</span>
              </div>
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full border border-primary/30">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white"><strong>15+</strong> anos experiência</span>
              </div>
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full border border-primary/30">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="text-white">Sigilo <strong>absoluto</strong></span>
              </div>
            </div>
          </div>

          {/* CTAs Principais - Destaque */}
          <div className="bg-black/60 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-8 mb-8 shadow-gold">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-green-500 mr-3 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Consulta Gratuita Agora!
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl text-xl px-12 py-7 font-bold animate-pulse"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                FALAR AGORA NO WHATSAPP
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:+556133563925'}
                className="bg-primary hover:bg-primary/90 text-black shadow-xl text-xl px-10 py-7 font-bold"
              >
                <Phone className="w-6 h-6 mr-2" />
                (61) 3356-3925
              </Button>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handleEmergencyWhatsApp}
                variant="outline"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-lg px-8 py-6 font-bold"
              >
                <Zap className="w-5 h-5 mr-2" />
                EMERGÊNCIA 24H - ATENDIMENTO IMEDIATO
              </Button>
            </div>

            <p className="text-gray-400 text-center mt-4 text-sm">
              ✓ Resposta em minutos • ✓ Consulta sem compromisso • ✓ Orçamento personalizado
            </p>
          </div>

          {/* Urgência */}
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Zap className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-red-400 font-bold text-lg md:text-xl">⚠️ OFERTA LIMITADA</span>
            </div>
            <p className="text-white text-center text-base md:text-lg">
              Apenas <strong className="text-primary">10 consultas gratuitas</strong> disponíveis esta semana! 
              <br className="hidden md:block" />
              <span className="text-gray-300">Garanta a sua agora.</span>
            </p>
          </div>

          <TrustBadges />

          {/* Cards de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-black/70 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-gold transition-all duration-300 group">
              <Lock className="w-14 h-14 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 text-center">Investigação Sigilosa</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Detetive particular no DF com <strong className="text-white">confidencialidade absoluta</strong>. 
                Seu caso protegido com máximo sigilo profissional.
              </p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-gold transition-all duration-300 group">
              <Zap className="w-14 h-14 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 text-center">Resultados em 72h</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Investigador em Brasília resolve <strong className="text-white">80% dos casos</strong> em até 3 dias. 
                Agilidade sem perder a qualidade.
              </p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border-2 border-primary/30 rounded-xl p-8 hover:border-primary hover:shadow-gold transition-all duration-300 group">
              <Shield className="w-14 h-14 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 text-center">Garantia Total</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Serviços de investigação em Brasília com <strong className="text-white">garantia de satisfação</strong>. 
                Sua tranquilidade é nossa prioridade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;