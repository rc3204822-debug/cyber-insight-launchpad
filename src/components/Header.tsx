import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Orçamento
            </Button>
            <Button className="bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow">
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Orçamento
                </Button>
                <Button className="bg-gradient-gold text-primary-foreground shadow-gold">
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