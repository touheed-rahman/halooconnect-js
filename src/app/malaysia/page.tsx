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
  "Cloud call center software in Malaysia for omnichannel support, predictive dialer workflows, IVR, WhatsApp engagement, analytics, and AI voice automation.";

export const metadata: Metadata = buildMetadata({
  title: "Call Center Software Malaysia | Cloud Contact Center Platform",
  description,
  path: "/malaysia",
  keywords: [
    "call center software Malaysia",
    "cloud call center Malaysia",
    "contact center software Kuala Lumpur",
    "omnichannel contact center Malaysia",
    "predictive dialer Malaysia",
  ],
});

export default function MalaysiaPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Malaysia", path: "/malaysia" },
  ]);
  const webPageSchema = createWebPageSchema({
    title: "Call Center Software Malaysia | Cloud Contact Center Platform",
    description,
    path: "/malaysia",
    about: ["call center software Malaysia", "cloud contact center Malaysia"],
  });
  const serviceSchema = createRegionalServiceSchema({
    name: "Call Center Software Malaysia",
    description,
    path: "/malaysia",
    country: "Malaysia",
    cities: ["Kuala Lumpur", "Selangor", "Johor"],
    serviceType: "Cloud call center software",
    availableLanguage: ["English", "Malay", "Mandarin", "Tamil"],
    keywords: [
      "call center software Malaysia",
      "cloud call center Malaysia",
      "predictive dialer Malaysia",
    ],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <LocalizedLandingPageNext
        country="Malaysia"
        countryCode="+60"
        headline="Leading Call Center Solution in"
      />
      <AiOverviewSection
        title="Modern Cloud Call Center Platform for Malaysia"
        summary="Malaysia teams use Haloo Connect to streamline high-volume customer communication with intelligent routing, AI-assisted workflows, and omnichannel visibility."
        bullets={[
          "Supports customer service programs across inbound and outbound journeys.",
          "Includes IVR, predictive dialer, and WhatsApp-native workflows.",
          "Improves team productivity through automation and performance reporting.",
          "Designed for scale across Kuala Lumpur, Selangor, Johor, and nationwide operations.",
        ]}
      />
    </>
  );
}
