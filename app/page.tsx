import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";
import FAQSection from "./component/FAQsection";
import PricingSection from "./component/PricingSection";
import { HoverEffect } from "./component/CardHover";
import { StickyScroll } from "./component/Sticky-scroll-revel";
import IntegrationsSection from "./component/IntegrationSection";
// import { BentoGrid } from "./component/Bentogrid";
// import { BentoGridItem } from "./component/Bentogrid";
import { BentoGridSecondDemo } from "./component/BentoTest";
//import { TextGenerateEffect } from "./component/TextGenerateEffect";
import { InfiniteMovingCards } from "./component/InfiniteMovingCards";

export default function Home() {
  const stickyScrollContent = [
    {
      title: "AI-Powered Interview Preparation",
      description:
        "Get personalized coaching tailored to your career stage and industry.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725_1280.jpg"
            alt="Interview Preparation"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Comprehensive Skill Assessment",
      description:
        "Identify your strengths and areas for improvement with in-depth analysis.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/08/02/24/chess-2727443_1280.jpg"
            alt="Skill Assessment"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive instant, actionable insights to enhance your interview performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/03/32/golf-ball-1867079_1280.jpg"
            alt="Real-Time Feedback"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive instant, actionable insights to enhance your interview performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2022/12/01/12/33/piano-7629023_1280.jpg"
            alt="Real-Time Feedback"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ),
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
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "Applically transformed my job search. I landed interviews at three top tech companies after just two weeks of preparation.",
      name: "Sarah Johnson",
      title: "Software Engineer at TechCorp",
    },
    {
      quote:
        "The AI interview practice sessions were incredibly realistic. I felt much more confident going into my actual interviews.",
      name: "Michael Chen",
      title: "Product Manager at StartupX",
    },
    {
      quote:
        "After struggling with interviews for months, Applically helped me identify my weak points and improve rapidly.",
      name: "Emma Rodriguez",
      title: "Data Scientist at AnalyticsPro",
    },
    {
      quote:
        "The personalized feedback after each practice interview was invaluable. I could see my improvement day by day.",
      name: "David Kim",
      title: "UX Designer at CreativeTech",
    },
    {
      quote:
        "I recommend Applically to all my friends looking for jobs. It's like having a personal interview coach available 24/7.",
      name: "Alex Thompson",
      title: "Marketing Manager at BrandBoost",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <TimelineSection />

      {/* Hover Effect Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Where does Applically help you in Job Quest?
          </h2>
          <HoverEffect
            items={[
              {
                title: "To Create Winning Resume with AI",
                description:
                  "Applically helps you builds a personalized, ATS-friendly Professionally designed Resume to get you noticed. Creating excellent resume is the first step toward landing your dream job!",
                link: "",
              },
              {
                title: "To Make Your Resume Highly Personalized",
                description:
                  "Let Applically’s AI make your resume Personalised for You and the Job you applying. Build a resume which grabs recruiters’ attention. no guesswork, just results.",
                link: "",
              },
              {
                title: "To Beat the ATS and Get Noticed",
                description:
                  "Applically optimizes your resume to pass Applicant Tracking Systems with 85+ Average Score, ensuring it reaches hiring managers. Make your resume ATS-Proof ",
                link: "",
              },
              {
                title: "To Ace Your Next Interview with AI Coaching",
                description:
                  "Applically’s AI-powered technology offers mock interviews tailored to your skill and the role you applying. Build confidence and give interview's fully from now. ",
                link: "",
              },
              {
                title: "To Get Instant Insights & Feedback",
                description:
                  "Applically’s AI-powered interview analytics offers you real-time Insights on your responses. From communication clarity to response effectiveness, get actionable insights and level up your interview game.",
                link: "/",
              },
              // {
              //   title: "Figma",
              //   description: "Collaborative design tool for teams.",
              //   link: "https://figma.com",
              // },
            ]}
          />
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

      {/*BentoGrid */}

      {/* Bento Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Applically Unique Features
          </h2>
          <BentoGridSecondDemo />
        </div>
      </section>

      {/* <section className="container mx-auto px-4 py-12 text-center">
        <TextGenerateEffect
         words = "Krishna Patil"
          className="max-w-4xl mx-auto"
        />
      </section> */}

      <IntegrationsSection />

      <PricingSection />
      {/* Testimonials Section with InfiniteMovingCards */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </section>
      <FAQSection />
    </div>
  );
}
