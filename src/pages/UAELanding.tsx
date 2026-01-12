import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import LocalizedHeroSection from "@/components/LocalizedHeroSection";
import SEOHead from "@/components/SEOHead";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ChannelsSection = lazy(() => import("@/components/ChannelsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA"));
const SecuritySection = lazy(() => import("@/components/SecuritySection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const SentimentSection = lazy(() => import("@/components/SentimentSection"));
const HexaAISection = lazy(() => import("@/components/HexaAISection"));
const BusinessIntelligenceSection = lazy(() => import("@/components/BusinessIntelligenceSection"));
const HexaPerformanceSection = lazy(() => import("@/components/HexaPerformanceSection"));
const DeploymentSection = lazy(() => import("@/components/DeploymentSection"));
const LocalizedOutcomesSection = lazy(() => import("@/components/LocalizedOutcomesSection"));
const LocalizedTopFeaturesSection = lazy(() => import("@/components/LocalizedTopFeaturesSection"));
const LocalizedCTASection = lazy(() => import("@/components/LocalizedCTASection"));
const MidPageCTA = lazy(() => import("@/components/MidPageCTA"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

const SectionLoader = () => <div className="min-h-[200px]" />;

const uaeContent = {
  country: "UAE & Dubai",
  countryCode: "+971",
  headline: "Best Call Center Software in",
  subheadline:
    "Leading Cloud Contact Center Solution in Dubai & UAE. Trusted by 500+ enterprises for AI-powered customer engagement, omnichannel support, and Arabic language capabilities.",
  benefits: [
    "Arabic & English AI Voice Bot",
    "WhatsApp Business API Integration",
    "Dubai DED Compliant Platform",
    "24/7 Local Support in UAE",
  ],
  stats: {
    users: "100K+",
    clients: "500+",
    calls: "30MN+",
    countries: "5+",
  },
};

const UAELanding = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haloo Connect UAE",
    "description": "Leading AI-powered contact center software provider in Dubai and UAE",
    "url": "https://halooconnect.com/uae",
    "telephone": "+971-508293464",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Contact Center Software",
    "provider": {
      "@type": "Organization",
      "name": "Haloocom"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Contact Center Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Bot",
            "description": "Arabic & English speaking AI voice assistant"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Omnichannel Platform",
            "description": "WhatsApp, voice, email, SMS integration"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Best Call Center Software Dubai & UAE 2025 | Cloud Contact Center Solution"
        description="#1 rated call center software in Dubai & UAE. AI-powered with Arabic voice bot, WhatsApp Business API, omnichannel support. Free demo + 14-day trial. 500+ UAE businesses trust us."
        keywords="call center software Dubai, contact center UAE, cloud call center Dubai, best call center software UAE 2025, customer service software Dubai, AI call center UAE, WhatsApp business API Dubai, Arabic voice bot, omnichannel contact center UAE, cloud telephony Dubai, IVR solutions UAE, CRM dialer Dubai"
        canonical="https://halooconnect.com/uae"
        schema={localBusinessSchema}
      />
      <main className="min-h-screen">
        <Header />
        <LocalizedHeroSection {...uaeContent} />
        <Suspense fallback={<SectionLoader />}>
          <LocalizedOutcomesSection country="UAE & Dubai" />
          <LocalizedTopFeaturesSection country="UAE & Dubai" />
          <MidPageCTA variant="secondary" country="UAE & Dubai" />
          <SentimentSection />
          <HexaAISection />
          <MidPageCTA variant="primary" country="UAE & Dubai" />
          <BusinessIntelligenceSection />
          <HexaPerformanceSection />
          <DeploymentSection />
          <FeaturesSection />
          <MidPageCTA variant="secondary" country="UAE & Dubai" />
          <ChannelsSection />
          <SecuritySection />
          <ClientsSection />
          <TestimonialsSection />
          <ContactForm />
          <LocalizedCTASection country="UAE & Dubai" />
          <Footer />
          <FloatingCTA />
          <ExitIntentPopup />
        </Suspense>
      </main>
    </>
  );
};

export default UAELanding;
