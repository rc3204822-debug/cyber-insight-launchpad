import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center pt-20">
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
              Proteção digital especializada com tecnologia de ponta. 
              Investigamos, protegemos e solucionamos casos cibernéticos com máxima discrição e eficiência.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow text-lg px-8 py-4">
              <Shield className="w-5 h-5 mr-2" />
              Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
              <Eye className="w-5 h-5 mr-2" />
              Nossos Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Lock className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Sigilo Absoluto</h3>
              <p className="text-muted-foreground">Total confidencialidade em todos os processos investigativos</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Zap className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Atendimento 24h</h3>
              <p className="text-muted-foreground">Emergências cibernéticas não esperam horário comercial</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-gold transition-all duration-300">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Tecnologia Avançada</h3>
              <p className="text-muted-foreground">Ferramentas de última geração para investigação digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;