import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";

import PricingSection from "./component/PricingSection";
import Testimonial from "./component/Testimonial";


export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <Hero />
      <TimelineSection />

      <PricingSection />
      <Testimonial/>
    </div>
  );
}
