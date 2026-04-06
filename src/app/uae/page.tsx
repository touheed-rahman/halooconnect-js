import type { Metadata } from "next";
import LocalizedLandingPageNext from "@/next/pages/LocalizedLandingPageNext";
import JsonLd from "@/next/components/JsonLd";
import AiOverviewSection from "@/components/AiOverviewSection";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createRegionalServiceSchema,
  createWebPageSchema,
} from "@/lib/seo";

const description =
  "AI-powered call center software for Dubai and the UAE with Arabic voice bot support, omnichannel routing, WhatsApp Business API, IVR, and predictive dialer automation.";

export const metadata: Metadata = buildMetadata({
  title: "Call Center Software Dubai & UAE | AI Cloud Contact Center",
  description,
  path: "/uae",
  keywords: [
    "call center software Dubai",
    "contact center software UAE",
    "cloud contact center Dubai",
    "Arabic AI voice bot UAE",
    "WhatsApp Business API UAE",
  ],
});

export default function UaePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "UAE", path: "/uae" },
  ]);
  const webPageSchema = createWebPageSchema({
    title: "Call Center Software Dubai & UAE | AI Cloud Contact Center",
    description,
    path: "/uae",
    about: ["call center software Dubai", "contact center software UAE"],
  });
  const serviceSchema = createRegionalServiceSchema({
    name: "Call Center Software Dubai & UAE",
    description,
    path: "/uae",
    country: "United Arab Emirates",
    cities: ["Dubai", "Abu Dhabi", "Sharjah"],
    serviceType: "Cloud contact center software",
    availableLanguage: ["English", "Arabic"],
    keywords: [
      "call center software Dubai",
      "contact center software UAE",
      "Arabic AI voice bot UAE",
    ],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <LocalizedLandingPageNext
        country="UAE & Dubai"
        countryCode="+971"
        headline="Best Call Center Software in"
      />
      <AiOverviewSection
        title="AI Contact Center Platform for UAE Operations"
        summary="For UAE teams in sales and customer support, Haloo Connect combines multilingual automation with omnichannel workflows to reduce missed opportunities and improve response speed."
        bullets={[
          "Supports Arabic and English service journeys.",
          "Handles inbound service and outbound campaign workflows in one platform.",
          "Improves oversight with real-time performance analytics for supervisors.",
          "Built for scalable deployments across Dubai, Abu Dhabi, and Sharjah.",
        ]}
      />
    </>
  );
}
