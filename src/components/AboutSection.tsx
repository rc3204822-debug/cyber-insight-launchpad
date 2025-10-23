import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  TrendingUp,
  Star,
  CheckCircle2,
  Shield
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Casos Resolvidos" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Atendimento" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "98%", label: "Taxa de Sucesso" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Anos de Experiência" }
  ];

  const certifications = [
    "Certificação Internacional ISO 27001",
    "Perito Digital Certificado (PDC)",
    "Certificação em Forense Computacional",
    "Especialização em Crimes Cibernéticos",
    "Certificação SANS GIAC"
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Advogado Criminalista",
      text: "Profissionais excepcionais. Conseguiram recuperar evidências cruciais que mudaram o rumo do caso.",
      rating: 5
    },
    {
      name: "Marina Santos",
      role: "Empresária",
      text: "Atendimento impecável e resultados surpreendentes. Recomendo sem hesitar.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Contador",
      text: "Investigação discreta e eficiente. Esclareceram tudo com máxima profissionalidade.",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher Nosso <span className="bg-gradient-gold bg-clip-text text-transparent">Detetive Particular em Brasília</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investigador particular em Brasília DF com expertise reconhecida nacionalmente. 
            Serviços de investigação particular no Distrito Federal com tecnologia de ponta e preço justo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Award className="w-6 h-6 text-primary mr-3" />
              Certificações e Qualificações
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Badge variant="outline" className="border-primary text-primary mr-2 mb-2">
                Forense Digital
              </Badge>
              <Badge variant="outline" className="border-primary text-primary mr-2 mb-2">
                Segurança Cibernética
              </Badge>
              <Badge variant="outline" className="border-primary text-primary mr-2 mb-2">
                Investigação Criminal
              </Badge>
              <Badge variant="outline" className="border-primary text-primary mr-2 mb-2">
                Recuperação de Dados
              </Badge>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="w-6 h-6 text-primary mr-3" />
              Nossa Missão
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Como investigador particular em Brasília DF, oferecemos serviços de investigação conjugal de excelência. 
              Nosso detetive particular em Brasília utiliza metodologias científicas e ferramentas de perícia digital 
              para garantir resultados precisos em investigação de infidelidade no Distrito Federal.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Nossos Valores</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Ética e transparência em todos os processos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Confidencialidade absoluta das informações</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Compromisso com a verdade e a justiça</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            O Que Nossos Clientes Dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="text-foreground font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;