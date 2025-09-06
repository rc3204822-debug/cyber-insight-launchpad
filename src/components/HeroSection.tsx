import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import TrustBadges from "./TrustBadges";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow mx-auto mb-6">
              <img 
                src="/lovable-uploads/fac86c3c-5386-47e2-b05f-625924171513.png" 
                alt="Agência Investigue Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                INVESTIGAÇÃO
              </span>
              <br />
              CIBERNÉTICA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Resolva seu caso em <strong className="text-primary">72 horas</strong> com os especialistas 
              mais experientes do Brasil. <strong className="text-foreground">Primeira consulta GRATUITA!</strong>
            </p>
          </div>

          {/* Urgency Callout */}
          <div className="bg-red-600/20 border border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-bold text-lg">ATENÇÃO: OFERTA LIMITADA</span>
            </div>
            <p className="text-foreground text-lg">
              Apenas <strong className="text-primary">10 consultas gratuitas</strong> disponíveis esta semana!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow text-xl px-12 py-6 animate-pulse">
              <Shield className="w-6 h-6 mr-3" />
              CONSULTA GRÁTIS AGORA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-xl px-8 py-6">
              <Zap className="w-6 h-6 mr-2" />
              EMERGÊNCIA 24H
            </Button>
          </div>

          {/* Social Proof Quick */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              <span><strong className="text-foreground">500+</strong> casos resolvidos</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              <span><strong className="text-foreground">98%</strong> taxa de sucesso</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              <span><strong className="text-foreground">15+</strong> anos de experiência</span>
            </div>
          </div>

          <TrustBadges />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Sigilo Absoluto</h3>
              <p className="text-muted-foreground">Total confidencialidade em todos os processos investigativos</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Resultados Rápidos</h3>
              <p className="text-muted-foreground">Resolvemos 80% dos casos em até 72 horas</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Garantia Total</h3>
              <p className="text-muted-foreground">100% de satisfação ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;