import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const OfferSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Consulta Gratuita
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Sua primeira consulta é <span className="text-primary">por nossa conta</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Receba uma análise completa do seu caso sem nenhum compromisso.
                Nosso especialista avaliará sua situação e apresentará as melhores estratégias de investigação.
              </p>

              <ul className="space-y-4 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {[
                  "Análise detalhada do caso (60 min)",
                  "Estratégia personalizada de investigação",
                  "Orçamento transparente e sem surpresas",
                  "Total confidencialidade garantida",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                onClick={() => openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de agendar minha consulta gratuita.")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-gold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Consulta Gratuita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right - Stats card */}
            <div className="bg-background border border-border rounded-xl p-10">
              <div className="space-y-8">
                {[
                  { number: "500+", label: "Casos resolvidos com sucesso" },
                  { number: "98%", label: "Taxa de satisfação dos clientes" },
                  { number: "72h", label: "Tempo médio de resolução" },
                  { number: "15+", label: "Anos de experiência no mercado" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-primary min-w-[80px]">{stat.number}</span>
                    <span className="text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
