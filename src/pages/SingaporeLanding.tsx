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

const singaporeContent = {
  country: "Singapore",
  countryCode: "+65",
  headline: "Enterprise Contact Center Software in",
  subheadline: "PDPA compliant AI contact center with multilingual voice bot support.",
  benefits: [
    "PDPA Compliant Platform",
    "Multilingual AI Voice Bot",
    "Singapore Data Center",
    "IMDA Certified Solution",
  ],
  stats: {
    users: "100K+",
    clients: "500+",
    calls: "30MN+",
    countries: "5+",
  },
};

const SingaporeLanding = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haloo Connect Singapore",
    "description": "Leading AI-powered contact center software provider in Singapore",
    "url": "https://halooconnect.com/singapore",
    "telephone": "+65-83765007",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Singapore",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.3521,
      "longitude": 103.8198
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "areaServed": ["Singapore"]
  };

  return (
    <>
      <SEOHead 
        title="Best Contact Center Software Singapore 2025 | AI Cloud Call Center Solution"
        description="#1 AI-powered enterprise contact center Singapore. PDPA compliant, multilingual voice bot (English, Mandarin, Malay, Tamil), predictive dialer, omnichannel. Free demo."
        keywords="contact center software Singapore, call center Singapore, cloud contact center Singapore, customer service platform Singapore, AI call center Singapore, PDPA compliant contact center, omnichannel Singapore, cloud telephony Singapore, IVR solutions Singapore, enterprise call center Singapore, best call center software 2025, predictive dialer Singapore, workforce management Singapore, automatic call distribution Singapore, CRM integration Singapore"
        canonical="https://halooconnect.com/singapore"
        schema={localBusinessSchema}
      />
      <main className="min-h-screen">
        <Header />
        <LocalizedHeroSection {...singaporeContent} />
        <Suspense fallback={<SectionLoader />}>
          <ScrollReveal><LocalizedOutcomesSection country="Singapore" /></ScrollReveal>
          <ScrollReveal delay={50}><LocalizedTopFeaturesSection country="Singapore" /></ScrollReveal>
          <MidPageCTA variant="secondary" country="Singapore" />
          <ScrollReveal><SentimentSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaAISection /></ScrollReveal>
          <MidPageCTA variant="primary" country="Singapore" />
          <ScrollReveal><BusinessIntelligenceSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaPerformanceSection /></ScrollReveal>
          <ScrollReveal><DeploymentSection /></ScrollReveal>
          <ScrollReveal><FeaturesSection /></ScrollReveal>
          <MidPageCTA variant="secondary" country="Singapore" />
          <ScrollReveal><ChannelsSection /></ScrollReveal>
          <ScrollReveal><SecuritySection /></ScrollReveal>
          <ScrollReveal><ClientsSection /></ScrollReveal>
          <ScrollReveal><TestimonialsSection /></ScrollReveal>
          <ContactForm />
          <LocalizedCTASection country="Singapore" />
          <Footer />
          <ExitIntentPopup />
        </Suspense>
      </main>
    </>
  );
};

export default SingaporeLanding;
