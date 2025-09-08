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
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <ConversionBanner />
      <Header />
      <Breadcrumbs />
      <main>
        <HeroSection />
        <OfferSection />
        <ServicesSection />
        <SocialProof />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
