import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', action: () => handleNavClick('home') },
    { label: 'Serviços', link: '/services' },
    { label: 'Preços', link: '/precos' },
    { label: 'Blog', link: '/blog' },
    { label: 'Sobre', action: () => handleNavClick('about') },
    { label: 'Contato', action: () => handleNavClick('contact') },
  ];

  return (
    <header className="fixed top-[41px] w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-card group-hover:border-primary/60 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-base font-bold text-foreground tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                AGÊNCIA INVESTIGUE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {navItems.map((item) =>
              item.link ? (
                <Link key={item.label} to={item.link} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <button key={item.label} onClick={item.action} className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 p-0 cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              onClick={() => openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de solicitar um orçamento.")}
            >
              Solicitar Orçamento
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3 mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {navItems.map((item) =>
                item.link ? (
                  <Link key={item.label} to={item.link} onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label} onClick={item.action} className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0 p-0 cursor-pointer text-left" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.label}
                  </button>
                )
              )}
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onClick={() => {
                  openWhatsApp(WHATSAPP_NUMBER, "Olá! Gostaria de solicitar um orçamento.");
                  setIsMenuOpen(false);
                }}
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
