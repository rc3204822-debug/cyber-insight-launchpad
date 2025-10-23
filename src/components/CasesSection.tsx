import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Calendar, Shield } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      category: "Investigação Conjugal",
      location: "Asa Norte, Brasília - DF",
      date: "Outubro 2024",
      description: "Cliente suspeitava de infidelidade conjugal. Através de perícia digital forense, recuperamos conversas deletadas do WhatsApp que comprovaram a traição. Provas válidas para processo de divórcio.",
      result: "Caso resolvido em 48 horas com provas jurídicas",
      badge: "Resolvido"
    },
    {
      category: "Crimes Cibernéticos",
      location: "Águas Claras, DF",
      date: "Setembro 2024",
      description: "Empresa vítima de invasão de sistema e vazamento de dados sigilosos. Investigação identificou funcionário interno responsável pela espionagem corporativa.",
      result: "Invasor identificado, dados recuperados, processo criminal em andamento",
      badge: "Resolvido"
    },
    {
      category: "Rastreamento Digital",
      location: "Taguatinga, DF",
      date: "Agosto 2024",
      description: "Pai procurava filha adolescente desaparecida. Rastreamento de celular e análise de redes sociais localizaram a jovem em menos de 24 horas.",
      result: "Pessoa localizada com segurança e reunida com a família",
      badge: "Resolvido"
    },
    {
      category: "Fraude Digital",
      location: "Lago Sul, Brasília",
      date: "Julho 2024",
      description: "Cliente perdeu R$ 85.000 em golpe de investimento online. Perícia digital rastreou transações, identificou criminosos e auxiliou na recuperação parcial dos valores.",
      result: "Criminosos identificados, recuperação de 60% do valor",
      badge: "Resolvido"
    },
    {
      category: "Investigação Empresarial",
      location: "Setor Comercial Sul, Brasília",
      date: "Junho 2024",
      description: "Empresa suspeitava de vazamento de informações para concorrente. Investigação digital identificou funcionário vendendo dados sigilosos.",
      result: "Fraude interna comprovada com evidências digitais",
      badge: "Resolvido"
    },
    {
      category: "Recuperação de Dados",
      location: "Ceilândia, DF",
      date: "Maio 2024",
      description: "Cliente teve HD externo formatado acidentalmente com arquivos pessoais e profissionais importantes. Recuperação forense restaurou 95% dos dados.",
      result: "Dados recuperados: fotos, documentos e arquivos de trabalho",
      badge: "Resolvido"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casos <span className="bg-gradient-gold bg-clip-text text-transparent">Resolvidos</span> em Brasília DF
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exemplos reais de investigações bem-sucedidas realizadas pelo nosso detetive particular 
            em Brasília. Nomes omitidos por sigilo profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((case_, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-600 text-white border-0">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {case_.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{case_.date}</span>
                </div>
                <CardTitle className="text-lg text-foreground mb-2">
                  {case_.category}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {case_.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {case_.description}
                </p>
                <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-3">
                  <div className="flex items-start">
                    <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-400 font-semibold">
                      {case_.result}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estatísticas de Casos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">72h</div>
            <div className="text-sm text-muted-foreground">Tempo Médio</div>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Sigilo Garantido</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            * Todos os casos são reais. Informações pessoais omitidas por confidencialidade profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
