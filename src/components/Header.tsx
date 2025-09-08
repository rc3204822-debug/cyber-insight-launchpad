import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrcamentoClick = () => {
    // Scroll para a seção de contato onde está o formulário de orçamento
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleEmergenciaClick = () => {
    const message = "🚨 EMERGÊNCIA CIBERNÉTICA! Preciso de atendimento imediato. Caso urgente.";
    openWhatsApp(WHATSAPP_NUMBER, message);
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (window.location.pathname === '/') {
      // Se já estiver na página inicial, apenas rola para a seção
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estiver em outra página, navega para home com hash
      window.location.href = '/#contact';
    }
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-12 w-full z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AGÊNCIA INVESTIGUE</h1>
              <p className="text-sm text-muted-foreground">Investigação Cibernética</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Serviços</Link>
            <Link to="/precos" className="text-foreground hover:text-primary transition-colors">Preços</Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <button onClick={handleContactClick} className="text-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 font-inherit cursor-pointer">Contato</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleOrcamentoClick}
            >
              Orçamento
            </Button>
            <Button 
              className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow"
              onClick={handleEmergenciaClick}
            >
              Emergência 24h
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors">Início</a>
              <Link to="/services" onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors">Serviços</Link>
              <Link to="/precos" onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors">Preços</Link>
              <a href="#about" onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <button onClick={handleContactClick} className="text-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 font-inherit cursor-pointer text-left">Contato</button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleOrcamentoClick}
                >
                  Orçamento
                </Button>
                <Button 
                  className="bg-gradient-gold text-primary-foreground shadow-gold"
                  onClick={handleEmergenciaClick}
                >
                  Emergência 24h
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;