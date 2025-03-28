import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";
import FAQSection from "./component/FAQsection";
import PricingSection from "./component/PricingSection";
import { HoverEffect } from "./component/CardHover"; // Adjust import path as needed
import Bentogrid from "./component/Bentogrid";
import IntegrationsSection from "./component/IntegrationSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TimelineSection />
      <Bentogrid />
      <IntegrationsSection/>
      <PricingSection />
      
      {/* Add HoverEffect section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Featured Integrations
          </h2>
          <HoverEffect items={[
            {
              title: "Stripe",
              description:
                "Seamless payment integration for global businesses.",
              link: "https://stripe.com",
            },
            {
              title: "Google Cloud",
              description:
                "Powerful cloud computing and AI services.",
              link: "https://cloud.google.com",
            },
            {
              title: "Slack",
              description:
                "Collaborative communication platform for teams.",
              link: "https://slack.com",
            },
            {
              title: "Notion",
              description:
                "All-in-one workspace for note-taking and collaboration.",
              link: "https://notion.so",
            },
            {
              title: "Zapier",
              description:
                "Automate workflows between your favorite apps.",
              link: "https://zapier.com",
            },
            {
              title: "Figma",
              description:
                "Collaborative design tool for teams.",
              link: "https://figma.com",
            },
          ]} />
        </div>
      </section>
      
      <FAQSection/>
    </div>
  );
}