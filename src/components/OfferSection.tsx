import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle2, 
  Clock, 
  Phone,
  AlertTriangle,
  Gift,
  Star,
  MessageCircle
} from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const OfferSection = () => {
  
  const handleWhatsAppConsulta = () => {
    const message = "Olá! Gostaria de agendar minha CONSULTA GRATUITA de investigação cibernética.";
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  const handleWhatsAppEmergencia = () => {
    const message = "🚨 EMERGÊNCIA CIBERNÉTICA! Preciso de atendimento imediato. Caso urgente que requer ação em até 1 hora.";
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  return (
    <section className="py-16 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-red-500 text-red-500 mb-4 px-4 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              OFERTA POR TEMPO LIMITADO
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                PRIMEIRA CONSULTA
              </span>
              <br />
              100% GRATUITA
            </h2>
            <p className="text-xl text-muted-foreground">
              Análise completa do seu caso + Relatório inicial + Plano de ação personalizado
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Free Consultation */}
            <Card className="bg-card border-2 border-primary relative overflow-hidden hover:shadow-gold transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gradient-gold text-primary-foreground px-4 py-2 text-sm font-bold">
                GRÁTIS
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Gift className="w-8 h-8 text-primary" />
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">R$ 500,00</div>
                    <div className="text-3xl font-bold text-primary">R$ 0,00</div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">Consulta Inicial Completa</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    Análise detalhada do caso (60min)
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    Relatório inicial profissional
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    Estratégia personalizada
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    Orçamento transparente
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    Sem compromisso
                  </li>
                </ul>
                <Button 
                  onClick={handleWhatsAppConsulta}
                  className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl text-lg py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WHATSAPP GRÁTIS
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Package */}
            <Card className="bg-gradient-to-br from-red-600/20 to-red-500/20 border-2 border-red-500 relative overflow-hidden hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold">
                URGENTE
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">A partir de</div>
                    <div className="text-3xl font-bold text-red-500">R$ 1.500</div>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">Atendimento Emergencial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" />
                    Atendimento em até 1 hora
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" />
                    Ação imediata 24/7
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" />
                    Equipe especializada
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" />
                    Relatório prioritário
                  </li>
                  <li className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-3" />
                    Suporte contínuo
                  </li>
                </ul>
                <Button 
                  onClick={handleWhatsAppEmergencia}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WHATSAPP EMERGÊNCIA
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Highlight */}
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-8 text-center">
            <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Atendimento Direto via WhatsApp
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-green-500">(61) 3356-3925</strong>
            </p>
            <p className="text-muted-foreground">
              Resposta instantânea • Disponível 24h • Primeira consulta sempre gratuita
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Garantia de Satisfação 100%
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se não ficarmos satisfeitos com a consulta inicial, devolvemos 100% do seu investimento. 
              Nossa reputação é construída na confiança e resultados.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-primary mr-1" />
                <span>5.0/5.0 Avaliação</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-primary mr-1" />
                <span>500+ Casos Resolvidos</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-primary mr-1" />
                <span>15+ Anos Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;