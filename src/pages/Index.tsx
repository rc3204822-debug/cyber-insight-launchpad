import ConversionBanner from "@/components/ConversionBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProof from "@/components/SocialProof";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ConversionBanner />
      <Header />
      <HeroSection />
      <OfferSection />
      <ServicesSection />
      <SocialProof />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
