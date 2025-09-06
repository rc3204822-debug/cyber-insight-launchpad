import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Investigação Digital Forense",
      description: "Análise completa de dispositivos eletrônicos e recuperação de dados perdidos ou deletados.",
      features: ["Recuperação de dados", "Análise de dispositivos", "Perícia digital"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Rastreamento de Celulares",
      description: "Localização e monitoramento de dispositivos móveis com tecnologia de geolocalização avançada.",
      features: ["Localização GPS", "Histórico de movimentação", "Monitoramento remoto"]
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title: "Investigação de Infidelidade",
      description: "Investigação discreta de suspeitas de traição com evidências digitais sólidas.",
      features: ["Monitoramento de redes sociais", "Análise de comunicações", "Relatório detalhado"]
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
            Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de investigação cibernética 
            com metodologia profissional e resultados comprovados.
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
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Emergência Cibernética?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está disponível 24 horas por dia para casos urgentes. 
              Tempo é crucial em investigações digitais.
            </p>
            <Button size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow text-lg px-8 py-4">
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