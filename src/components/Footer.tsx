import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border">
      {/* WhatsApp CTA Section no Footer */}
      <div className="bg-green-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Precisa de um Detetive Particular em Brasília?
              </h3>
              <p className="text-green-100">
                Atendimento 24h • Consulta gratuita • Resultados em 72h
              </p>
            </div>
            <Button 
              size="lg"
              onClick={() => {
                const message = "Olá! Vi o site e gostaria de falar com o detetive particular em Brasília. Consulta gratuita.";
                openWhatsApp(WHATSAPP_NUMBER, message);
              }}
              className="bg-white hover:bg-gray-100 text-green-600 text-lg px-8 py-6 font-bold shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              FALAR AGORA NO WHATSAPP
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">AGÊNCIA INVESTIGUE</h3>
                <p className="text-sm text-muted-foreground">Investigação Cibernética</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Especialistas em investigação digital com mais de 15 anos de experiência. 
              Oferecemos soluções profissionais para casos cibernéticos complexos.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors" onClick={() => window.open('https://facebook.com', '_blank')}>
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
              <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors" onClick={() => window.open('https://instagram.com', '_blank')}>
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
              <button className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors" onClick={() => window.open('https://linkedin.com', '_blank')}>
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Investigação Digital</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog e Artigos</Link></li>
              <li><Link to="/precos" className="text-muted-foreground hover:text-primary transition-colors">Preços e Valores</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Rastreamento de Celulares</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Crimes Cibernéticos</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Recuperação de Dados</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">(61) 3356-3925</p>
                  <p className="text-sm text-muted-foreground">WhatsApp 24h - Resposta instantânea</p>
                  <Button 
                    size="sm"
                    onClick={() => {
                      const message = "Olá! Gostaria de falar com o detetive particular em Brasília.";
                      openWhatsApp(WHATSAPP_NUMBER, message);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white mt-2"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">contato@investigcib.com.br</p>
                  <p className="text-sm text-muted-foreground">Resposta em até 2h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">Brasília - DF</p>
                  <p className="text-sm text-muted-foreground">Asa Sul, Brasília</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Agência Investigue. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 font-inherit cursor-pointer">Política de Privacidade</button>
              <button className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 font-inherit cursor-pointer">Termos de Serviço</button>
              <button className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 font-inherit cursor-pointer">Código de Ética</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;