import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Mendes",
      role: "Advogado Criminalista",
      location: "São Paulo, SP",
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Resultado impressionante! Conseguiram recuperar evidências que considerávamos perdidas. O caso foi resolvido em 72 horas.",
      case: "Fraude Empresarial",
      verified: true
    },
    {
      name: "Marina Costa",
      role: "Empresária",
      location: "Rio de Janeiro, RJ", 
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Profissionalismo exemplar. Descobriram quem estava vazando informações confidenciais da empresa. Recomendo!",
      case: "Investigação Corporativa",
      verified: true
    },
    {
      name: "Carlos Alberto",
      role: "Contador",
      location: "Belo Horizonte, MG",
      avatar: "/api/placeholder/48/48", 
      rating: 5,
      text: "Atendimento 24h salvou minha empresa. Pararam um ataque hacker em tempo real. Equipe muito preparada.",
      case: "Ataque Cibernético",
      verified: true
    },
    {
      name: "Ana Paula Silva",
      role: "Médica",
      location: "Brasília, DF",
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Caso pessoal resolvido com total discrição. Recuperaram conversas deletadas que eram cruciais para o processo.",
      case: "Investigação Pessoal",
      verified: true
    },
    {
      name: "Roberto Fernandes",
      role: "Delegado aposentado",
      location: "Salvador, BA",
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Como ex-policial, posso afirmar: são os melhores em investigação digital. Metodologia impecável.",
      case: "Consultor de Segurança",
      verified: true
    },
    {
      name: "Luciana Rocha",
      role: "Jornalista",
      location: "Porto Alegre, RS",
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Ajudaram a identificar quem estava me perseguindo online. Problema resolvido definitivamente. Muito obrigada!",
      case: "Cyberstalking",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O Que Nossos <span className="bg-gradient-gold bg-clip-text text-transparent">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mais de 500 casos resolvidos com sucesso em todo o Brasil
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="ml-2 text-foreground font-semibold">5.0/5.0</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="text-muted-foreground">
              <strong className="text-foreground">500+</strong> avaliações verificadas
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-gold transition-all duration-300 relative">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary opacity-50" />
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground italic mb-4">
                  "{testimonial.text}"
                </p>

                <Badge variant="outline" className="border-primary text-primary text-xs">
                  {testimonial.case}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte Emergencial</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;