import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ConversionBanner from "@/components/ConversionBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Phone, Shield, Clock, Award } from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Precos = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de saber os valores dos serviços de detetive particular em Brasília DF.";
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  const services = [
    {
      category: "Investigação de Infidelidade",
      price: "A partir de R$ 1.200",
      duration: "7-15 dias",
      description: "Investigação completa de infidelidade conjugal com relatório detalhado e evidências legais.",
      features: [
        "Vigilância discreta",
        "Coleta de evidências",
        "Relatório fotográfico",
        "Provas com validade legal",
        "Sigilo absoluto"
      ]
    },
    {
      category: "Localização de Pessoas",
      price: "A partir de R$ 800",
      duration: "3-10 dias", 
      description: "Localização de pessoas desaparecidas, devedores ou parentes perdidos.",
      features: [
        "Pesquisa em bancos de dados",
        "Investigação de campo",
        "Relatório de localização",
        "Informações atualizadas",
        "Método legal"
      ]
    },
    {
      category: "Perícia Digital Forense",
      price: "A partir de R$ 1.500",
      duration: "5-20 dias",
      description: "Recuperação de dados, análise de dispositivos e investigação de crimes digitais.",
      features: [
        "Recuperação de dados deletados",
        "Análise de celulares/computadores",
        "Investigação de invasões",
        "Laudo técnico pericial",
        "Suporte judicial"
      ]
    },
    {
      category: "Investigação Empresarial",
      price: "A partir de R$ 2.000",
      duration: "10-30 dias",
      description: "Investigação de fraudes, concorrência desleal e due diligence empresarial.",
      features: [
        "Análise de concorrentes",
        "Investigação de funcionários",
        "Auditoria de segurança",
        "Relatório executivo",
        "Consultoria preventiva"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Preços Detetive Particular DF | Valores Justos Brasília - Orçamento Grátis"
        description="Preços de detetive particular em Brasília DF com valores justos e transparentes. Investigação de infidelidade, localização de pessoas, perícia digital. Orçamento gratuito!"
        keywords="detetive particular df preço, detetive particular brasília valores, quanto custa detetive df, preço investigação infidelidade brasília, valores detetive particular distrito federal, orçamento detetive df"
        schemaType="service"
      />
      <ConversionBanner />
      <Header />
      <Breadcrumbs />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Preços Detetive Particular DF
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Valores justos e transparentes para serviços de investigação em Brasília DF. 
                <strong className="text-primary"> Primeira consulta sempre gratuita!</strong>
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Preços Transparentes
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Consulta Gratuita
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  Sem Taxa de Avaliação
                </Badge>
              </div>

              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Solicitar Orçamento Gratuito
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Tabela de Preços - Detetive Particular Brasília DF
                </h2>
                <p className="text-lg text-muted-foreground">
                  Valores referenciais. Orçamento final baseado na complexidade do caso.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">
                        {service.category}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-foreground">
                          {service.price}
                        </span>
                        <Badge variant="outline" className="text-sm">
                          {service.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        onClick={handleWhatsAppContact}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Solicitar Orçamento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Dúvidas sobre os preços de detetive particular em Brasília DF?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato agora mesmo para uma consulta gratuita e orçamento personalizado. 
                Atendemos todo o Distrito Federal com discrição e profissionalismo.
              </p>
              
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-8 max-w-lg mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-500 font-bold text-xl">(61) 3356-3925</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  WhatsApp • Resposta Imediata • Atendimento 24h
                </p>
              </div>

              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white text-xl px-8 py-4"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Consulta Gratuita no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Precos;