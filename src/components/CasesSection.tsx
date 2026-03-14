import { CheckCircle2, MapPin } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      category: "Investigação Conjugal",
      location: "Asa Norte, Brasília",
      description: "Recuperação de conversas deletadas que comprovaram infidelidade. Provas válidas para processo de divórcio.",
      result: "Resolvido em 48 horas",
    },
    {
      category: "Crimes Cibernéticos",
      location: "Águas Claras, DF",
      description: "Identificação de funcionário interno responsável por espionagem corporativa e vazamento de dados sigilosos.",
      result: "Invasor identificado",
    },
    {
      category: "Rastreamento Digital",
      location: "Taguatinga, DF",
      description: "Rastreamento de celular e análise de redes sociais localizaram adolescente desaparecida.",
      result: "Localizada em 24 horas",
    },
    {
      category: "Fraude Digital",
      location: "Lago Sul, Brasília",
      description: "Rastreamento de transações de golpe de R$ 85 mil. Identificação dos criminosos e recuperação parcial.",
      result: "60% do valor recuperado",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Resultados Comprovados
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Casos resolvidos em Brasília
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Exemplos reais de investigações bem-sucedidas. Nomes omitidos por sigilo profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cases.map((c, index) => (
            <div key={index} className="p-8 rounded-xl border border-border bg-background">
              <div className="flex items-center justify-between mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="text-xs font-medium tracking-wider uppercase text-primary">{c.category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {c.location}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {c.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <CheckCircle2 className="w-4 h-4" />
                {c.result}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          * Todos os casos são reais. Informações pessoais omitidas por confidencialidade profissional.
        </p>
      </div>
    </section>
  );
};

export default CasesSection;
