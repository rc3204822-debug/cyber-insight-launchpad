import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Smartphone,
  UserX,
  CreditCard,
  Globe,
  Database,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Perícia Digital Forense",
      description: "Análise de dispositivos eletrônicos e recuperação de dados com metodologia forense.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Rastreamento de Celular",
      description: "Localização e monitoramento de dispositivos no Distrito Federal com tecnologia avançada.",
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "Investigação Conjugal",
      description: "Investigação de infidelidade com discrição absoluta e evidências sólidas para processos.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Fraudes Financeiras",
      description: "Investigação de golpes online, fraudes bancárias e rastreamento de transações.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Crimes Cibernéticos",
      description: "Investigação de invasões, vazamentos de dados e ataques cibernéticos corporativos.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Recuperação de Dados",
      description: "Restauração de informações perdidas em HDs danificados, arquivos deletados e sistemas.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Investigação Particular
            <br />
            <span className="text-primary">em Brasília DF</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Serviços completos de investigação com perícia digital forense,
            tecnologia de ponta e resultados comprovados no Distrito Federal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-10 hover:bg-secondary/50 transition-colors duration-300 group cursor-pointer"
              onClick={() => navigate('/services')}
            >
              <div className="text-primary mb-6 group-hover:text-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.description}
              </p>
              <span className="text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Saiba mais <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
