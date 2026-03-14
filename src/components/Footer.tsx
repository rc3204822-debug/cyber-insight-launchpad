import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-base font-bold text-foreground tracking-wide">AGÊNCIA INVESTIGUE</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Especialistas em investigação digital com mais de 15 anos de experiência.
              Soluções profissionais para casos complexos no Distrito Federal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Investigação Digital</Link></li>
              <li><Link to="/precos" className="text-muted-foreground hover:text-foreground transition-colors">Preços</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Perícia Forense</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(61) 3356-3925</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@investigcib.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Asa Sul, Brasília — DF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <span>© 2024 Agência Investigue. Todos os direitos reservados.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-foreground transition-colors bg-transparent border-0 p-0 cursor-pointer">Política de Privacidade</button>
            <button className="hover:text-foreground transition-colors bg-transparent border-0 p-0 cursor-pointer">Termos de Serviço</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
