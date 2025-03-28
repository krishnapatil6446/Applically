import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";
import FAQSection from "./component/FAQsection";
import PricingSection from "./component/PricingSection";
import { HoverEffect } from "./component/CardHover";
import { StickyScroll } from "./component/Sticky-scroll-revel";
import IntegrationsSection from "./component/IntegrationSection";
import { BentoGrid } from "./component/Bentogrid";

export default function Home() {
  const stickyScrollContent = [
    {
      title: "AI-Powered Interview Preparation",
      description: "Get personalized coaching tailored to your career stage and industry.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725_1280.jpg" 
            alt="Interview Preparation" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )
    },
    {
      title: "Comprehensive Skill Assessment",
      description: "Identify your strengths and areas for improvement with in-depth analysis.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_1280.jpg" 
            alt="Skill Assessment" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )
    },
    {
      title: "Real-Time Feedback",
      description: "Receive instant, actionable insights to enhance your interview performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/03/32/golf-ball-1867079_1280.jpg" 
            alt="Real-Time Feedback" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )
    },
    {
      title: "Real-Time Feedback",
      description: "Receive instant, actionable insights to enhance your interview performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="https://cdn.pixabay.com/photo/2022/12/01/12/33/piano-7629023_1280.jpg" 
            alt="Real-Time Feedback" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )
    },
    {
      title: "",
      description: "",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src="https://cdn.pixabay.com/photo/2022/12/01/12/33/piano-7629023_1280.jpg" 
            alt="Real-Time Feedback" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )
    },
    
    
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <TimelineSection />
      
      {/* Hover Effect Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
          Where does Applically help you in your JobQuest?
          </h2>
          <HoverEffect items={[
            {
              title: "Stripe",
              description: "Seamless payment integration for global businesses.",
              link: "https://stripe.com",
            },
            {
              title: "Google Cloud",
              description: "Powerful cloud computing and AI services.",
              link: "https://cloud.google.com",
            },
            {
              title: "Slack",
              description: "Collaborative communication platform for teams.",
              link: "https://slack.com",
            },
            {
              title: "Notion",
              description: "All-in-one workspace for note-taking and collaboration.",
              link: "https://notion.so",
            },
            {
              title: "Zapier",
              description: "Automate workflows between your favorite apps.",
              link: "https://zapier.com",
            },
            {
              title: "Figma",
              description: "Collaborative design tool for teams.",
              link: "https://figma.com",
            },
          ]} />
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
          How Applically Helps You?
          </h2>
          <StickyScroll content={stickyScrollContent} />
        </div>
      </section>
      <BentoGrid/>
      <IntegrationsSection/>
      <PricingSection />
      <FAQSection/>
    </div>
  );
}