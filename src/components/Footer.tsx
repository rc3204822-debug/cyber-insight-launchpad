import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border">
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
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Investigação Digital</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Rastreamento de Celulares</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Crimes Cibernéticos</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Fraudes Financeiras</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Recuperação de Dados</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">(11) 9 9999-9999</p>
                  <p className="text-sm text-muted-foreground">Segunda - Sexta: 8h - 18h</p>
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
                  <p className="text-foreground">São Paulo - SP</p>
                  <p className="text-sm text-muted-foreground">Av. Paulista, 1000</p>
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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Serviço</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Código de Ética</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;