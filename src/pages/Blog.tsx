import ConversionBanner from "@/components/ConversionBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Breadcrumbs from "@/components/Breadcrumbs";

const Blog = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Li um artigo no blog e gostaria de uma consultoria gratuita com o detetive particular em Brasília.";
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  const articles = [
    {
      title: "Como Identificar Infidelidade Digital: Guia Completo para Brasília DF",
      excerpt: "Descubra os principais sinais de infidelidade digital e como um investigador particular em Brasília pode ajudar com evidências concretas.",
      category: "Investigação Conjugal",
      date: "15 de Outubro, 2025",
      author: "Detetive Especialista DF",
      content: [
        {
          subtitle: "Sinais de Infidelidade Digital no DF",
          text: "A investigação de infidelidade conjugal em Brasília tem crescido devido ao uso intenso de tecnologia. Como detetive particular em Brasília DF, identificamos comportamentos suspeitos que podem indicar traição digital."
        },
        {
          subtitle: "10 Sinais de Alerta",
          list: [
            "Mudança repentina de senha no celular",
            "Excesso de tempo nas redes sociais",
            "Conversas apagadas frequentemente",
            "Chamadas secretas ou em outro cômodo",
            "Segundo chip ou aparelho escondido",
            "Bloqueio de acesso ao computador",
            "Histórico de navegação sempre limpo",
            "Mensagens em aplicativos criptografados",
            "Recusa em mostrar notificações",
            "Comportamento defensivo ao ser questionado"
          ]
        },
        {
          subtitle: "Como o Detetive Particular em Brasília Pode Ajudar",
          text: "Nosso investigador particular no DF utiliza perícia digital forense para recuperar conversas deletadas, rastrear localizações e obter provas legais de infidelidade. A investigação conjugal em Brasília é feita com total discrição e sigilo absoluto."
        },
        {
          subtitle: "Evidências Legais no Distrito Federal",
          text: "Para ter validade jurídica no DF, as provas de infidelidade precisam ser obtidas de forma legal. Como detetive particular em Brasília, seguimos todos os protocolos legais para garantir que as evidências sejam aceitas em processos de divórcio."
        }
      ]
    },
    {
      title: "Segurança Cibernética para Empresas em Brasília: Proteção Essencial",
      excerpt: "Proteja sua empresa no DF contra crimes cibernéticos com as melhores práticas de segurança digital e investigação forense.",
      category: "Segurança Digital",
      date: "10 de Outubro, 2025",
      author: "Perito Digital DF",
      content: [
        {
          subtitle: "Ameaças Cibernéticas em Brasília",
          text: "Empresas no Distrito Federal enfrentam ataques diários de hackers. Como detetive particular em Brasília DF especializado em crimes cibernéticos, ajudamos empresas a se protegerem e investigar invasões."
        },
        {
          subtitle: "Serviços de Proteção Digital no DF",
          list: [
            "Auditoria de segurança cibernética",
            "Investigação de vazamento de dados",
            "Perícia forense digital em casos de invasão",
            "Rastreamento de ataques hackers",
            "Recuperação de sistemas comprometidos",
            "Treinamento de equipes em segurança",
            "Monitoramento de ameaças em tempo real"
          ]
        },
        {
          subtitle: "Como Agir em Caso de Ataque Cibernético",
          text: "Se sua empresa em Brasília sofreu um ataque, nosso investigador particular no DF pode realizar perícia digital forense para identificar os invasores e recuperar dados. Atendimento 24h para emergências cibernéticas."
        }
      ]
    },
    {
      title: "Direitos Legais em Investigações Particulares no Distrito Federal",
      excerpt: "Entenda seus direitos ao contratar um detetive particular em Brasília e como as investigações são regulamentadas no DF.",
      category: "Legislação DF",
      date: "5 de Outubro, 2025",
      author: "Consultor Jurídico",
      content: [
        {
          subtitle: "Legislação sobre Detetives Particulares no DF",
          text: "A profissão de investigador particular em Brasília é regulamentada pela Lei Federal 13.432/2017. Todo detetive particular no DF deve seguir normas éticas e legais rigorosas."
        },
        {
          subtitle: "O que um Detetive Particular PODE Fazer no DF",
          list: [
            "Investigação de infidelidade conjugal legal",
            "Rastreamento de pessoas desaparecidas",
            "Perícia digital e recuperação de dados",
            "Investigação de fraudes empresariais",
            "Levantamento patrimonial legal",
            "Investigação de antecedentes",
            "Coleta de provas para processos judiciais"
          ]
        },
        {
          subtitle: "Direitos do Cliente em Brasília",
          text: "Ao contratar serviços de investigação particular em Brasília DF, você tem direito a sigilo absoluto, relatório detalhado com provas legais, atendimento transparente e garantia de que todas as evidências foram obtidas dentro da lei."
        },
        {
          subtitle: "Validade das Provas no Judiciário do DF",
          text: "Como detetive particular em Brasília, garantimos que todas as provas coletadas têm validade jurídica e podem ser utilizadas em processos no Tribunal de Justiça do Distrito Federal."
        }
      ]
    },
    {
      title: "Rastreamento de Celular em Brasília: Tecnologia e Legalidade",
      excerpt: "Saiba como funciona o rastreamento de celulares no DF, quando é legal e como o detetive particular pode ajudar.",
      category: "Tecnologia Forense",
      date: "1 de Outubro, 2025",
      author: "Especialista em Rastreamento DF",
      content: [
        {
          subtitle: "Rastreamento Legal de Celulares no DF",
          text: "O rastreamento de celular em Brasília deve seguir a legislação brasileira. Como investigador particular no DF, utilizamos apenas métodos legais de localização e monitoramento digital."
        },
        {
          subtitle: "Tecnologias de Rastreamento Usadas em Brasília",
          list: [
            "Geolocalização GPS autorizada",
            "Análise de torres de celular (triangulação)",
            "Perícia em histórico de localização",
            "Recuperação de dados de GPS deletados",
            "Monitoramento legal de dispositivos"
          ]
        },
        {
          subtitle: "Quando o Rastreamento é Legal no DF",
          text: "O rastreamento de celular em Brasília é legal quando autorizado pelo proprietário do dispositivo ou com ordem judicial. Nosso detetive particular no DF opera sempre dentro dos limites legais."
        },
        {
          subtitle: "Casos que Exigem Rastreamento em Brasília",
          text: "Investigação de infidelidade conjugal, localização de menores desaparecidos, recuperação de celulares roubados e monitoramento de funcionários (com consentimento) são casos comuns de rastreamento no Distrito Federal."
        }
      ]
    },
    {
      title: "Perícia Digital Forense: Como Recuperar Provas Deletadas no DF",
      excerpt: "Descubra como a perícia digital forense pode recuperar conversas, fotos e arquivos deletados para uso em investigações no DF.",
      category: "Forense Digital",
      date: "25 de Setembro, 2025",
      author: "Perito Forense Digital",
      content: [
        {
          subtitle: "O que é Perícia Digital Forense em Brasília",
          text: "A perícia digital forense realizada por detetive particular em Brasília DF é a ciência de recuperar, preservar e analisar dados digitais para uso como prova legal no Distrito Federal."
        },
        {
          subtitle: "O que Podemos Recuperar no DF",
          list: [
            "Conversas deletadas do WhatsApp",
            "Mensagens apagadas de redes sociais",
            "Fotos e vídeos excluídos",
            "Histórico de navegação deletado",
            "E-mails removidos permanentemente",
            "Arquivos formatados de HDs",
            "Dados de celulares danificados",
            "Registros de chamadas apagados"
          ]
        },
        {
          subtitle: "Processo de Perícia Digital em Brasília",
          text: "Como investigador particular no DF, seguimos protocolo rigoroso: coleta segura de evidências, análise forense em laboratório, preservação da cadeia de custódia e emissão de laudo técnico com validade jurídica."
        },
        {
          subtitle: "Aplicações da Perícia Digital no DF",
          text: "Investigação de infidelidade conjugal, crimes cibernéticos empresariais, fraudes digitais, processos trabalhistas e disputas de guarda de menores são casos comuns que exigem perícia digital forense em Brasília."
        }
      ]
    },
    {
      title: "Investigação Empresarial em Brasília: Proteção Contra Fraudes Internas",
      excerpt: "Como proteger sua empresa no DF contra fraudes, vazamento de informações e crimes internos com investigação profissional.",
      category: "Investigação Corporativa",
      date: "20 de Setembro, 2025",
      author: "Consultor Empresarial DF",
      content: [
        {
          subtitle: "Fraudes Empresariais Comuns em Brasília",
          text: "Empresas no Distrito Federal sofrem com desvio de recursos, espionagem corporativa e vazamento de dados. Como detetive particular em Brasília DF, investigamos fraudes internas e externas."
        },
        {
          subtitle: "Serviços de Investigação Corporativa no DF",
          list: [
            "Investigação de desvio de recursos",
            "Apuração de vazamento de informações sigilosas",
            "Background check de candidatos",
            "Investigação de concorrência desleal",
            "Perícia digital em computadores corporativos",
            "Auditoria de segurança da informação",
            "Investigação de fraudes em licitações"
          ]
        },
        {
          subtitle: "Sinais de Fraude Interna",
          text: "Mudanças no padrão de vida de funcionários, acesso indevido a sistemas, reuniões secretas com concorrentes e documentos sigilosos em computadores pessoais são sinais investigados por nosso investigador particular em Brasília."
        },
        {
          subtitle: "Prevenção de Crimes Corporativos no DF",
          text: "Implementar políticas de segurança, auditorias regulares e due diligence em novos parceiros são medidas preventivas. Nosso detetive particular no DF oferece consultoria em segurança corporativa."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog do Detetive Particular em Brasília DF | Artigos sobre Investigação"
        description="Artigos sobre investigação particular em Brasília, investigação conjugal no DF, perícia digital, segurança cibernética e direitos legais. Conteúdo por detetive particular especializado."
        keywords="blog detetive brasília, artigos investigação df, investigação particular brasília, perícia digital df, segurança cibernética brasília, direitos investigação df"
        schemaType="organization"
      />
      <ConversionBanner />
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-dark py-20 mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Blog do <span className="bg-gradient-gold bg-clip-text text-transparent">Detetive Particular em Brasília</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Artigos especializados sobre investigação particular no DF, perícia digital forense, 
                segurança cibernética e direitos legais em investigações no Distrito Federal.
              </p>
              <Button 
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultoria Gratuita WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-3">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {article.content.map((section, idx) => (
                      <div key={idx}>
                        <h2 className="text-xl font-semibold text-foreground mb-3">
                          {section.subtitle}
                        </h2>
                        {section.text && (
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {section.text}
                          </p>
                        )}
                        {section.list && (
                          <ul className="space-y-2 mb-4">
                            {section.list.map((item, listIdx) => (
                              <li key={listIdx} className="flex items-start text-muted-foreground">
                                <ArrowRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Article CTA */}
                  <div className="mt-8 p-6 bg-gradient-dark rounded-lg border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Precisa de um Detetive Particular em Brasília DF?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Investigador particular no DF com experiência em {article.category.toLowerCase()}. 
                      Consulta gratuita e atendimento 24h no Distrito Federal.
                    </p>
                    <Button 
                      onClick={handleWhatsAppContact}
                      className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp: (61) 3356-3925
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-dark rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Investigação Particular Profissional em Brasília DF
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Detetive particular em Brasília com 15+ anos de experiência, perícia digital forense 
              e atendimento 24h. Primeira consulta gratuita!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consulta Gratuita Agora
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const message = "🚨 EMERGÊNCIA! Preciso do detetive particular DF urgente.";
                  openWhatsApp(WHATSAPP_NUMBER, message);
                }}
              >
                Emergência 24h
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

export default Blog;
