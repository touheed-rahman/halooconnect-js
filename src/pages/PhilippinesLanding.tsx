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

const philippinesContent = {
  country: "Philippines",
  countryCode: "+63",
  headline: "Best Contact Center Software in",
  subheadline: "AI-powered BPO contact center with Filipino voice bot & omnichannel support.",
  benefits: [
    "NPC & Data Privacy Act Compliant",
    "Filipino & English AI Voice Bot",
    "BPO-Ready Omnichannel Platform",
    "24/7 Local Support in Manila",
  ],
  stats: {
    users: "100K+",
    clients: "500+",
    calls: "30MN+",
    countries: "5+",
  },
};

const PhilippinesLanding = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haloo Connect Philippines",
    "description": "Leading AI-powered contact center software provider in the Philippines for BPO and enterprise",
    "url": "https://halooconnect.com/philippines",
    "telephone": "+63-9171234567",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manila",
      "addressRegion": "Metro Manila",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.5995,
      "longitude": 120.9842
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "areaServed": ["Manila", "Cebu", "Davao", "Philippines"]
  };

  return (
    <>
      <SEOHead
        title="Best Call Center Software Philippines 2025 | BPO Contact Center Solution Manila"
        description="#1 AI-powered BPO contact center software Philippines. Filipino voice bot, predictive dialer, WhatsApp & Viber integration, NPC compliant. Free demo. Trusted by 500+ enterprises."
        keywords="call center software Philippines, BPO software Philippines, contact center Manila, cloud call center Philippines 2025, predictive dialer Philippines, AI call center Philippines, outbound dialer Philippines, customer service platform Philippines, omnichannel contact center Philippines, IVR solutions Philippines, CRM dialer Philippines, call center software Cebu, call center software Davao, Viber business API Philippines, WhatsApp business Philippines, automatic call distribution Philippines, workforce management BPO, quality monitoring software Philippines"
        canonical="https://halooconnect.com/philippines"
        schema={localBusinessSchema}
      />
      <main className="min-h-screen">
        <Header />
        <LocalizedHeroSection {...philippinesContent} />
        <Suspense fallback={<SectionLoader />}>
          <ScrollReveal><LocalizedOutcomesSection country="Philippines" /></ScrollReveal>
          <ScrollReveal delay={50}><LocalizedTopFeaturesSection country="Philippines" /></ScrollReveal>
          <MidPageCTA variant="secondary" country="Philippines" />
          <ScrollReveal><SentimentSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaAISection /></ScrollReveal>
          <MidPageCTA variant="primary" country="Philippines" />
          <ScrollReveal><BusinessIntelligenceSection /></ScrollReveal>
          <ScrollReveal delay={50}><HexaPerformanceSection /></ScrollReveal>
          <ScrollReveal><DeploymentSection /></ScrollReveal>
          <ScrollReveal><FeaturesSection /></ScrollReveal>
          <MidPageCTA variant="secondary" country="Philippines" />
          <ScrollReveal><ChannelsSection /></ScrollReveal>
          <ScrollReveal><SecuritySection /></ScrollReveal>
          <ScrollReveal><ClientsSection /></ScrollReveal>
          <ScrollReveal><TestimonialsSection /></ScrollReveal>
          <ContactForm />
          <LocalizedCTASection country="Philippines" />
          <Footer />
          <ExitIntentPopup />
        </Suspense>
      </main>
    </>
  );
};

export default PhilippinesLanding;
