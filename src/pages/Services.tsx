import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionBanner from "@/components/ConversionBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { 
  Search, 
  Smartphone, 
  UserX, 
  CreditCard, 
  Globe, 
  Database,
  Shield,
  Clock,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Phone,
  Star
} from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Investigação Digital Forense",
      description: "Análise completa de dispositivos eletrônicos e recuperação de dados perdidos ou deletados com metodologia científica.",
      features: [
        "Recuperação de dados de HDs danificados",
        "Análise forense de smartphones e tablets", 
        "Perícia digital com validade jurídica",
        "Recuperação de arquivos deletados",
        "Análise de histórico de navegação",
        "Extração de dados de aplicativos"
      ],
      price: "A partir de R$ 800",
      duration: "2-5 dias úteis"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Rastreamento de Celulares",
      description: "Localização e monitoramento de dispositivos móveis com tecnologia de geolocalização avançada e legal.",
      features: [
        "Localização GPS em tempo real",
        "Histórico completo de movimentação",
        "Monitoramento remoto seguro",
        "Rastreamento de múltiplos dispositivos",
        "Relatórios detalhados de localização",
        "Alertas de movimento suspeito"
      ],
      price: "A partir de R$ 1.200",
      duration: "Resultados imediatos"
    },
    {
      icon: <UserX className="w-12 h-12" />,
      title: "Investigação de Infidelidade",
      description: "Investigação discreta de suspeitas de traição com evidências digitais sólidas e admissíveis em tribunal.",
      features: [
        "Monitoramento de redes sociais",
        "Análise de comunicações digitais",
        "Investigação de relacionamentos online",
        "Relatório detalhado com evidências",
        "Acompanhamento discreto e profissional",
        "Suporte emocional durante o processo"
      ],
      price: "A partir de R$ 1.500",
      duration: "1-3 semanas"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Fraudes Financeiras",
      description: "Investigação especializada em golpes online, fraudes bancárias e crimes financeiros digitais.",
      features: [
        "Análise detalhada de transações suspeitas",
        "Rastreamento de contas fraudulentas",
        "Identificação de autores de golpes",
        "Recuperação de valores perdidos",
        "Prevenção de novos ataques",
        "Assessoria jurídica especializada"
      ],
      price: "A partir de R$ 2.000",
      duration: "1-4 semanas"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Crimes Cibernéticos",
      description: "Investigação profissional de hackers, vazamentos de dados e ataques cibernéticos corporativos.",
      features: [
        "Análise de invasões de sistemas",
        "Identificação de hackers e criminosos",
        "Investigação de vazamento de dados",
        "Proteção preventiva contra ataques",
        "Auditoria de segurança digital",
        "Treinamento de equipes corporativas"
      ],
      price: "A partir de R$ 3.000",
      duration: "2-6 semanas"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Recuperação de Dados",
      description: "Restauração especializada de informações perdidas em casos de exclusão acidental ou sabotagem.",
      features: [
        "Recuperação de HDs danificados",
        "Restauração de arquivos deletados",
        "Recuperação de sistemas corrompidos",
        "Análise de mídias danificadas", 
        "Recuperação de bancos de dados",
        "Serviço de emergência 24h disponível"
      ],
      price: "A partir de R$ 600",
      duration: "1-3 dias úteis"
    }
  ];

  const handleWhatsAppContact = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar mais informações sobre o serviço de "${serviceName}". Preciso de uma consulta GRATUITA.`;
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background">
      <ConversionBanner />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="outline" 
              onClick={handleBackToHome}
              className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Oferecemos uma gama completa de serviços de investigação cibernética 
              com metodologia profissional, tecnologia avançada e resultados comprovados.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">72h</div>
                <div className="text-sm text-muted-foreground">Resposta Média</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-primary mb-4">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-foreground text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-foreground font-semibold mb-3">O que está incluído:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleWhatsAppContact(service.title)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consulta Gratuita no WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        const message = `🚨 EMERGÊNCIA! Preciso do serviço de "${service.title}" com urgência.`;
                        openWhatsApp(WHATSAPP_NUMBER, message);
                      }}
                      className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Emergência 24h
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada caso é único. Nossa equipe especializada pode desenvolver uma solução 
            personalizada para sua necessidade específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => handleWhatsAppContact("Consulta Personalizada")}
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta Personalizada GRÁTIS
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleBackToHome}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Site
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;