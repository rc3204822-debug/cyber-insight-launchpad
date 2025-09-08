import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schemaType?: 'organization' | 'service';
}

const SEO = ({ 
  title = "Detetive Particular DF | Brasília - Investigação Profissional 24h",
  description = "Detetive particular em Brasília DF com preço justo. Investigação de infidelidade, rastreamento, forense digital. Detetive DF barato e confiável. Atendimento 24h.",
  keywords = "detetive particular df, detetive particular brasilia, detetive df, detetive particular df preço, detetive particular em brasília, detetive particular brasília df, detetive particular df barato, detetive em brasília, detetive em brasilia, detetive em brasília df",
  schemaType = 'organization'
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Add structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    
    const structuredData = schemaType === 'organization' ? {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Agência Investigue - Detetive Particular DF",
      "description": "Detetive particular em Brasília DF especializado em investigação de infidelidade, rastreamento, forense digital e crimes cibernéticos.",
      "url": "https://agenciainvestigue.com",
      "telephone": "+556133563925",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brasília",
        "addressRegion": "DF",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-15.7942287",
        "longitude": "-47.8821658"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-15.7942287",
          "longitude": "-47.8821658"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Detetive Particular DF",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Investigação de Infidelidade",
              "description": "Detetive particular em Brasília especializado em investigação de infidelidade conjugal"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Rastreamento de Celulares",
              "description": "Serviço de rastreamento e localização de dispositivos móveis no DF"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Investigação Digital Forense",
              "description": "Perícia digital e recuperação de dados por detetive particular DF"
            }
          }
        ]
      }
    } : {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Agência Investigue - Detetive Particular DF",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Brasília",
          "addressRegion": "DF", 
          "addressCountry": "BR"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Distrito Federal"
      }
    };

    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [title, description, keywords, schemaType]);

  return null;
};

export default SEO;