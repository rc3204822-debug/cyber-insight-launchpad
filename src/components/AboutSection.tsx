import { Award, CheckCircle2, Shield } from "lucide-react";

const AboutSection = () => {
  const certifications = [
    "Certificação Internacional ISO 27001",
    "Perito Digital Certificado (PDC)",
    "Certificação em Forense Computacional",
    "Especialização em Crimes Cibernéticos",
    "Certificação SANS GIAC",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Quem Somos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Por que escolher a <span className="text-primary">Agência Investigue</span>?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Com mais de 15 anos de atuação no Distrito Federal, somos referência em
                investigação particular em Brasília. Nossa equipe utiliza metodologias
                científicas e ferramentas de perícia digital para garantir resultados
                precisos com total sigilo profissional.
              </p>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <Shield className="w-4 h-4 text-primary" />
                  Nossos Valores
                </h3>
                <ul className="space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {[
                    "Ética e transparência em todos os processos",
                    "Confidencialidade absoluta das informações",
                    "Compromisso com a verdade e a justiça",
                  ].map((value, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Certificações e Qualificações
                </h3>
              </div>
              <div className="space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Forense Digital", "Segurança Cibernética", "Investigação Criminal", "Recuperação de Dados"].map((tag) => (
                  <span key={tag} className="text-xs border border-primary/30 text-primary rounded-full px-3 py-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
