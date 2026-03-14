import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🔍 *Solicitação de Orçamento*\n\n👤 ${formData.name}\n📧 ${formData.email}\n📱 ${formData.phone}\n📋 ${formData.subject}\n💬 ${formData.message}`;
    openWhatsApp(WHATSAPP_NUMBER, msg);
    toast({ title: "Redirecionando para WhatsApp", description: "Continue a conversa pelo WhatsApp." });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, title: "(61) 3356-3925", subtitle: "WhatsApp 24h" },
    { icon: <Mail className="w-5 h-5" />, title: "contato@investigcib.com.br", subtitle: "Resposta em até 2h" },
    { icon: <MapPin className="w-5 h-5" />, title: "Brasília — DF", subtitle: "Asa Sul" },
    { icon: <Clock className="w-5 h-5" />, title: "Seg–Sex: 8h–18h", subtitle: "Emergências: 24/7" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Nossa equipe está pronta para atender você com máxima discrição e eficiência.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="text-primary mt-0.5">{info.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{info.title}</p>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>{info.subtitle}</p>
                </div>
              </div>
            ))}

            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              onClick={() => openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de falar com o detetive particular em Brasília.")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-xl border border-border bg-card" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground text-sm">Nome</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} className="bg-background border-border text-foreground mt-1" required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground text-sm">Telefone</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-background border-border text-foreground mt-1" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-sm">E-mail</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-background border-border text-foreground mt-1" required />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground text-sm">Assunto</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-background border-border text-foreground mt-1" placeholder="Ex: Investigação conjugal, perícia digital..." required />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground text-sm">Mensagem</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-background border-border text-foreground min-h-[100px] mt-1" placeholder="Descreva seu caso. Todas as informações são confidenciais." required />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61510.87684238838!2d-47.92919672343755!3d-15.794228700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3aed55b99c45%3A0x85e4f2da3a4e5d0!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Detetive Particular em Brasília DF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
