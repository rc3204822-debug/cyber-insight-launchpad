import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Shield,
  MessageSquare,
  AlertTriangle,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem formatada para WhatsApp
    const whatsappMessage = `
🔍 *SOLICITAÇÃO DE ORÇAMENTO*

👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}  
📱 *Telefone:* ${formData.phone}
📋 *Assunto:* ${formData.subject}
💬 *Mensagem:* ${formData.message}
${formData.urgent ? '🚨 *URGENTE:* Caso requer ação imediata!' : ''}

_Enviado via formulário do site_
    `.trim();
    
    // Redirecionar para WhatsApp
    openWhatsApp(WHATSAPP_NUMBER, whatsappMessage);
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será redirecionado para continuar no WhatsApp.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      urgent: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="bg-gradient-gold bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precisa de ajuda com investigação cibernética? Nossa equipe especializada 
            está pronta para atender você com máxima discrição e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-dark border-border hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-foreground">Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary text-lg font-semibold mb-2">(61) 3356-3925</p>
              <p className="text-muted-foreground text-sm mb-2">WhatsApp disponível 24h</p>
              <p className="text-muted-foreground text-sm">Resposta instantânea</p>
              <div className="mt-4">
                <Button 
                  onClick={() => {
                    const message = "Olá! Gostaria de agendar minha consulta GRATUITA de investigação cibernética.";
                    openWhatsApp(WHATSAPP_NUMBER, message);
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-dark border-border hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-foreground">E-mail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary text-lg font-semibold mb-2">contato@investigadorregis.com.br</p>
              <p className="text-muted-foreground text-sm">Resposta em até 2 horas</p>
              <p className="text-muted-foreground text-sm">Casos urgentes: resposta imediata</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-dark border-border hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-foreground">Escritório</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary text-lg font-semibold mb-2">Brasília - DF</p>
              <p className="text-muted-foreground text-sm">Asa Sul, Brasília - DF</p>
              <p className="text-muted-foreground text-sm">Atendimento por agendamento</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <MessageSquare className="w-5 h-5 text-primary mr-3" />
                Solicite um Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                    placeholder="Ex: Investigação de fraude, Recuperação de dados..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground min-h-[120px]"
                    placeholder="Descreva seu caso com o máximo de detalhes possível. Todas as informações são tratadas com máxima confidencialidade."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <Label htmlFor="urgent" className="text-muted-foreground flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    Caso urgente (resposta em até 1 hora)
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl text-lg py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <div className="space-y-6">
            <Card className="bg-gradient-dark border-border border-red-500/30">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                  Emergência Cibernética
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Para casos que requerem ação imediata, como invasões ativas, 
                  vazamento de dados em andamento ou chantagens digitais.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp: (61) 3356-3925
                  </Button>
                  <Button 
                    onClick={() => {
                      const message = "🚨 EMERGÊNCIA CIBERNÉTICA! Preciso de atendimento imediato.";
                      openWhatsApp(WHATSAPP_NUMBER, message);
                    }}
                    variant="outline" 
                    className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Emergência WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda - Sexta</span>
                  <span className="text-foreground font-semibold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="text-muted-foreground">Apenas emergências</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between">
                    <span className="text-primary font-semibold">Emergências</span>
                    <span className="text-primary font-semibold">24h / 7 dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Garantia de Privacidade</h4>
              <p className="text-muted-foreground text-sm">
                Todas as comunicações são criptografadas e protegidas por sigilo profissional. 
                Suas informações jamais serão compartilhadas com terceiros sem sua autorização expressa.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Nossa Localização em Brasília DF
          </h3>
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-border max-w-5xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61510.87684238838!2d-47.92919672343755!3d-15.794228700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3aed55b99c45%3A0x85e4f2da3a4e5d0!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Detetive Particular em Brasília DF"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Atendemos todo o Distrito Federal e região metropolitana de Brasília
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
