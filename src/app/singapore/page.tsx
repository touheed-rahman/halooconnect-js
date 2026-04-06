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
  "Enterprise contact center software in Singapore with omnichannel voice, WhatsApp, email, PDPA-conscious workflows, predictive dialer, IVR, and multilingual AI voice automation.";

export const metadata: Metadata = buildMetadata({
  title: "Contact Center Software Singapore | AI Cloud Call Center",
  description,
  path: "/singapore",
  keywords: [
    "contact center software Singapore",
    "cloud call center Singapore",
    "omnichannel customer support software Singapore",
    "AI voice bot Singapore",
    "PDPA contact center software",
  ],
});

export default function SingaporePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Singapore", path: "/singapore" },
  ]);
  const webPageSchema = createWebPageSchema({
    title: "Contact Center Software Singapore | AI Cloud Call Center",
    description,
    path: "/singapore",
    about: ["contact center software Singapore", "cloud call center Singapore"],
  });
  const serviceSchema = createRegionalServiceSchema({
    name: "Contact Center Software Singapore",
    description,
    path: "/singapore",
    country: "Singapore",
    cities: ["Singapore"],
    serviceType: "Enterprise contact center software",
    availableLanguage: ["English", "Mandarin", "Malay", "Tamil"],
    keywords: [
      "contact center software Singapore",
      "cloud call center Singapore",
      "PDPA contact center software",
    ],
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <LocalizedLandingPageNext
        country="Singapore"
        countryCode="+65"
        headline="Enterprise Contact Center Software in"
      />
      <AiOverviewSection
        title="Enterprise-Ready Contact Center Software for Singapore"
        summary="Haloo Connect helps Singapore teams centralize customer communication operations with AI automation, omnichannel routing, and consistent service-quality monitoring."
        bullets={[
          "PDPA-conscious process design for regulated customer operations.",
          "Omnichannel support across calls, WhatsApp, email, and SMS.",
          "AI voice and workflow automation to improve first response time.",
          "Operational analytics for workforce performance and SLA control.",
        ]}
      />
    </>
  );
}
