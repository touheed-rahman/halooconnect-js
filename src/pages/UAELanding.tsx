import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import LocalizedHeroSection from "@/components/LocalizedHeroSection";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";

const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ChannelsSection = lazy(() => import("@/components/ChannelsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
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
  subheadline: "AI-powered cloud contact center with Arabic voice bot & WhatsApp API.",
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

  return (
    <>
      <SEOHead 
        title="Best Call Center Software Dubai & UAE 2025 | AI Cloud Contact Center Solution"
        description="#1 AI-powered call center software Dubai & UAE. Arabic voice bot, WhatsApp Business API, predictive dialer, omnichannel support. Free demo + 14-day trial. 500+ UAE businesses trust us."
        keywords="call center software Dubai, contact center UAE, cloud call center Dubai, best call center software UAE 2025, customer service software Dubai, AI call center UAE, WhatsApp business API Dubai, Arabic voice bot, omnichannel contact center UAE, cloud telephony Dubai, IVR solutions UAE, CRM dialer Dubai, predictive dialer UAE, automatic call distribution Dubai, workforce management UAE, quality monitoring Dubai, outbound dialer UAE, inbound call center Dubai"
        canonical="https://halooconnect.com/uae"
        schema={localBusinessSchema}
      />
      <main className="min-h-screen">
        <Header />
        <LocalizedHeroSection {...uaeContent} />
        <Suspense fallback={<SectionLoader />}>
          <ScrollReveal><LocalizedOutcomesSection country="UAE & Dubai" /></ScrollReveal>
          <ScrollReveal delay={50}><LocalizedTopFeaturesSection country="UAE & Dubai" /></ScrollReveal>
          <MidPageCTA variant="secondary" country="UAE & Dubai" />
          <ScrollReveal><SentimentSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaAISection /></ScrollReveal>
          <MidPageCTA variant="primary" country="UAE & Dubai" />
          <ScrollReveal><BusinessIntelligenceSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaPerformanceSection /></ScrollReveal>
          <ScrollReveal><DeploymentSection /></ScrollReveal>
          <ScrollReveal><FeaturesSection /></ScrollReveal>
          <MidPageCTA variant="secondary" country="UAE & Dubai" />
          <ScrollReveal><ChannelsSection /></ScrollReveal>
          <ScrollReveal><SecuritySection /></ScrollReveal>
          <ScrollReveal><ClientsSection /></ScrollReveal>
          <ScrollReveal><TestimonialsSection /></ScrollReveal>
          <ContactForm />
          <LocalizedCTASection country="UAE & Dubai" />
          <Footer />
          <ExitIntentPopup />
        </Suspense>
      </main>
    </>
  );
};

export default UAELanding;
