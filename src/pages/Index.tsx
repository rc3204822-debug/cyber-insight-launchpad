import ConversionBanner from "@/components/ConversionBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProof from "@/components/SocialProof";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Index;
