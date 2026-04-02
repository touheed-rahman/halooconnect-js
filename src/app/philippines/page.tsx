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

export const dynamic = "force-dynamic";

const description =
  "BPO-friendly contact center software in the Philippines with cloud calling, omnichannel workflows, IVR, predictive dialer, analytics, WhatsApp, and AI automation.";

export const metadata: Metadata = buildMetadata({
  title: "Call Center Software Philippines | BPO Contact Center Platform",
  description,
  path: "/philippines",
  keywords: [
    "call center software Philippines",
    "BPO contact center software",
    "cloud call center Manila",
    "omnichannel contact center Philippines",
    "AI voice bot Philippines",
  ],
});

export default function PhilippinesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Philippines", path: "/philippines" },
  ]);
  const webPageSchema = createWebPageSchema({
    title: "Call Center Software Philippines | BPO Contact Center Platform",
    description,
    path: "/philippines",
    about: ["call center software Philippines", "BPO contact center platform"],
  });
  const serviceSchema = createRegionalServiceSchema({
    name: "Call Center Software Philippines",
    description,
    path: "/philippines",
    country: "Philippines",
    cities: ["Manila", "Cebu", "Davao"],
    serviceType: "BPO contact center software",
    availableLanguage: ["English", "Filipino"],
    keywords: [
      "call center software Philippines",
      "BPO contact center software",
      "cloud call center Manila",
    ],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <LocalizedLandingPageNext
        country="Philippines"
        countryCode="+63"
        headline="Best Contact Center Software in"
      />
      <AiOverviewSection
        title="BPO-Friendly Contact Center Software for the Philippines"
        summary="Haloo Connect gives Philippines support and BPO teams a unified AI-enabled platform to manage voice and digital conversations with measurable quality and speed."
        bullets={[
          "Built for large-agent environments with omnichannel coordination.",
          "Optimizes inbound support and outbound campaigns with automation.",
          "Supports operational coaching with analytics and QA visibility.",
          "Ready for high-volume programs across Manila, Cebu, and Davao.",
        ]}
      />
    </>
  );
}
