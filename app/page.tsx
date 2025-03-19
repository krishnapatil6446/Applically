import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TimelineSection from "./components/TimelineSection";
import TestimonialMarquee from "./components/TestimonialMarquee";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TimelineSection />
      <TestimonialMarquee />
      <PricingSection/>
    </div>
  );
}
