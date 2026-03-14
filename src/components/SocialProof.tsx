import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo M.",
      role: "Advogado Criminalista",
      text: "Resultado impressionante. Recuperaram evidências cruciais que mudaram o rumo do caso. Caso resolvido em 72 horas.",
    },
    {
      name: "Marina C.",
      role: "Empresária",
      text: "Profissionalismo exemplar. Descobriram quem estava vazando informações confidenciais da empresa.",
    },
    {
      name: "Carlos A.",
      role: "Contador",
      text: "Atendimento 24h salvou minha empresa. Pararam um ataque hacker em tempo real. Equipe muito preparada.",
    },
    {
      name: "Ana Paula S.",
      role: "Médica — Brasília, DF",
      text: "Caso pessoal resolvido com total discrição. Recuperaram conversas deletadas cruciais para o processo.",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            5.0 — mais de 500 avaliações verificadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="relative p-8 rounded-xl border border-border bg-background">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground mb-6 leading-relaxed italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.name}</p>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
