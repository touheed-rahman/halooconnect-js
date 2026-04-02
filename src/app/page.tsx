import type { Metadata } from "next";
import HomePageNext from "@/next/pages/HomePageNext";
import JsonLd from "@/next/components/JsonLd";
import AiOverviewSection from "@/components/AiOverviewSection";
import {
  buildMetadata,
  createBreadcrumbSchema,
  createServiceSchema,
  createWebPageSchema,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "AI Contact Center Software | Cloud Call Center Platform",
  description:
    "AI-powered cloud contact center software for omnichannel voice, WhatsApp, email, SMS, IVR, predictive dialer, analytics, and multilingual AI voice bots.",
  path: "",
  keywords: [
    "AI contact center software",
    "cloud call center platform",
    "omnichannel customer service software",
    "predictive dialer software",
    "call center CRM integration",
    "WhatsApp Business API software",
    "multilingual AI voice bot",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI contact center software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI contact center software combines cloud calling, IVR, omnichannel routing, analytics, and automation tools such as AI voice bots to help customer service teams handle conversations faster and more consistently.",
      },
    },
    {
      "@type": "Question",
      name: "Does Haloo Connect support WhatsApp, voice, email, and SMS in one platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Haloo Connect is designed as an omnichannel contact center platform, so teams can manage voice calls, WhatsApp conversations, email, SMS, and related workflows from one system.",
      },
    },
    {
      "@type": "Question",
      name: "Is this cloud call center software suitable for enterprise teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The platform is built for growing and enterprise customer support teams that need routing logic, analytics, agent performance visibility, CRM integrations, and scalable cloud deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Can Haloo Connect help with outbound calling and predictive dialer workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Teams can use dialer workflows, automation, and reporting to improve outbound productivity while keeping customer interactions aligned with operational goals.",
      },
    },
  ],
};

export default function Home() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
  ]);
  const webPageSchema = createWebPageSchema({
    title: "AI Contact Center Software | Cloud Call Center Platform",
    description:
      "AI-powered cloud contact center software for omnichannel voice, WhatsApp, email, SMS, IVR, predictive dialer, analytics, and multilingual AI voice bots.",
    path: "",
    about: [
      "AI contact center software",
      "cloud call center software",
      "omnichannel customer service platform",
    ],
  });
  const serviceSchema = createServiceSchema({
    name: "AI Contact Center Software",
    description:
      "Cloud contact center software with omnichannel routing, IVR, predictive dialer, analytics, and AI voice automation.",
    path: "",
    serviceType: "Cloud contact center software",
    areaServed: ["Singapore", "United Arab Emirates", "Malaysia", "Philippines", "India"],
  });

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <HomePageNext />
      <AiOverviewSection
        title="What Haloo Connect Delivers for Enterprise Customer Operations"
        summary="Haloo Connect is an AI-native cloud contact center platform built for enterprise teams that need one operational layer across inbound and outbound customer communication."
        bullets={[
          "Unified omnichannel stack for voice, WhatsApp, email, and SMS.",
          "AI voice automation, IVR, and predictive dialing for speed and consistency.",
          "Supervisor-grade analytics for SLA tracking, agent coaching, and performance improvement.",
          "Deployment support across Singapore, UAE, Malaysia, Philippines, and India.",
        ]}
      />
      <section className="border-t border-border/60 bg-background py-12">
        <div className="container mx-auto max-w-4xl space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            AI Contact Center Software for Enterprise Customer Operations
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            Haloo Connect is an AI-powered cloud contact center platform designed for enterprises that manage
            high-volume customer conversations across voice, WhatsApp, email, and SMS. Teams use the platform to
            unify communication channels, reduce operational silos, and improve response quality with consistent
            routing, automation, and monitoring. This AI contact center software combines intelligent queueing,
            workflow automation, and real-time visibility so support and sales teams can make faster decisions
            while maintaining service standards at scale.
          </p>
          <p className="text-base leading-8 text-muted-foreground">
            The cloud call center platform includes IVR, predictive dialer capabilities, call analytics, and
            multilingual AI voice automation to support both inbound and outbound programs. Businesses can connect
            CRM and business systems to maintain conversation context, automate follow-ups, and improve first-contact
            resolution. For organizations moving away from legacy telephony stacks, the platform provides a practical
            modernization path with lower infrastructure complexity, improved scalability, and easier governance of
            customer communication workflows.
          </p>
          <p className="text-base leading-8 text-muted-foreground">
            Haloo Connect is built for omnichannel customer service performance, not just channel aggregation.
            Supervisors can track agent outcomes, conversation quality, and service-level trends while teams execute
            measurable improvement plans. Whether the goal is faster response time, better lead conversion, or higher
            customer satisfaction, the AI contact center software supports operational excellence through unified data,
            automation, and clear reporting. This helps enterprises in Singapore, UAE, Malaysia, Philippines, and
            India deploy a modern customer experience stack that is reliable, adaptable, and aligned with long-term
            growth.
          </p>
        </div>
      </section>
    </>
  );
}
