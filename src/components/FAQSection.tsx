import { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Quanto custa um detetive particular em Brasília DF?",
    answer: "Os valores de um detetive particular em Brasília DF variam conforme o tipo de investigação. Oferecemos preços justos e competitivos no mercado do Distrito Federal. A primeira consulta é sempre gratuita para avaliarmos seu caso e apresentarmos um orçamento personalizado."
  },
  {
    question: "Como funciona a investigação de infidelidade no DF?",
    answer: "Nossa investigação de infidelidade em Brasília utiliza métodos legais e discretos. Realizamos vigilância, coleta de evidências digitais e físicas, sempre respeitando a legislação brasileira. Todo o processo é sigiloso e as provas coletadas têm validade legal."
  },
  {
    question: "Detetive particular DF é legal e confiável?",
    answer: "Sim, o serviço de detetive particular em Brasília DF é totalmente legal quando exercido por profissionais habilitados. Nossa agência atua dentro da lei, com métodos aprovados e mantendo total sigilo das informações dos clientes."
  },
  {
    question: "Quanto tempo demora uma investigação no Distrito Federal?",
    answer: "O tempo de investigação em Brasília DF varia conforme a complexidade do caso. Investigações simples podem levar de 7 a 15 dias, enquanto casos mais complexos podem demorar de 30 a 60 dias. Fornecemos relatórios parciais durante todo o processo."
  },
  {
    question: "Atendem casos de emergência 24h em Brasília?",
    answer: "Sim, oferecemos atendimento emergencial 24 horas em Brasília DF para casos urgentes como invasões digitais, chantagens ou situações que requerem ação imediata. Nossa equipe está sempre disponível via WhatsApp."
  },
  {
    question: "Que tipos de casos um detetive particular DF resolve?",
    answer: "Nosso detetive particular em Brasília atende casos de infidelidade conjugal, localização de pessoas, investigação empresarial, crimes digitais, perícia forense, rastreamento de bens, investigação patrimonial e muito mais no Distrito Federal."
  },
  {
    question: "Como contratar um detetive particular confiável em Brasília?",
    answer: "Para contratar um detetive particular confiável em Brasília DF, verifique as credenciais, experiência e reputação. Nossa agência oferece consulta gratuita, orçamento transparente e garantia de sigilo absoluto. Entre em contato via WhatsApp para iniciar sua investigação."
  },
  {
    question: "Detetive particular DF aceita qualquer forma de pagamento?",
    answer: "Sim, facilitamos o pagamento dos serviços de detetive particular em Brasília DF. Aceitamos PIX, cartão de crédito parcelado, transferência bancária e outras formas de pagamento. Consulte as condições na sua primeira consulta gratuita."
  }
];

const FAQSection = () => {
  useEffect(() => {
    // Add FAQ structured data for SEO
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'faq-structured-data';
    script.type = 'application/ld+json';
    
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    script.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes sobre <span className="bg-gradient-gold bg-clip-text text-transparent">Detetive Particular DF</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços de investigação em Brasília DF
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <p className="text-lg">
              <strong className="text-primary">WhatsApp: (61) 3356-3925</strong> - Consulta Gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;