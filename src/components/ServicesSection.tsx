import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Smartphone, 
  FileSearch, 
  UserX, 
  CreditCard, 
  Shield,
  Computer,
  Globe,
  Database
} from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Perícia Digital Forense em Brasília",
      description: "Investigador particular DF especializado em análise de dispositivos eletrônicos e recuperação de dados.",
      features: ["Recuperação de dados", "Perícia forense digital", "Análise de celulares"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Rastreamento de Celular em Brasília",
      description: "Detetive particular DF oferece localização e monitoramento de dispositivos no Distrito Federal.",
      features: ["Rastreamento celular DF", "Localização GPS Brasília", "Monitoramento digital"]
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title: "Investigação Conjugal em Brasília DF",
      description: "Investigação de infidelidade conjugal no DF com detetive particular discreto e evidências sólidas.",
      features: ["Investigação de traição DF", "Monitoramento conjugal", "Provas de infidelidade"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fraudes Financeiras",
      description: "Investigação de golpes online, fraudes bancárias e crimes financeiros digitais.",
      features: ["Análise de transações", "Rastreamento de contas", "Recuperação de valores"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Crimes Cibernéticos",
      description: "Investigação de hackers, vazamentos de dados e ataques cibernéticos corporativos.",
      features: ["Análise de invasões", "Identificação de hackers", "Proteção preventiva"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Recuperação de Dados",
      description: "Restauração de informações perdidas em casos de exclusão acidental ou sabotagem.",
      features: ["HDs danificados", "Arquivos deletados", "Sistemas corrompidos"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços de <span className="bg-gradient-gold bg-clip-text text-transparent">Investigação Particular em Brasília DF</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investigador particular em Brasília oferece serviços completos de investigação conjugal no DF 
            com preço justo, perícia digital forense e resultados comprovados no Distrito Federal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold group">
              <CardHeader>
                <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-foreground text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => navigate('/services')}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-dark rounded-2xl p-8 md:p-12 border border-border">
            <Computer className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Detetive Particular em Brasília - Atendimento 24h
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Investigador particular no DF disponível 24 horas para casos de investigação urgentes em Brasília. 
              Serviços de detetive particular no Distrito Federal com atendimento emergencial.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow text-lg px-8 py-4"
              onClick={() => {
                const message = "🚨 EMERGÊNCIA! Preciso do detetive particular DF com urgência. Caso emergencial.";
                openWhatsApp(WHATSAPP_NUMBER, message);
              }}
            >
              <Shield className="w-5 h-5 mr-2" />
              Contato de Emergência
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;