import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";
import FAQSection from "./component/FAQsection";
import PricingSection from "./component/PricingSection";
import Testimonial from "./component/Testimonial";
import Bentogrid from "./component/Bentogrid";


export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <Hero />
      <TimelineSection />
      <Bentogrid />
      <PricingSection />
      <Testimonial/>
      <FAQSection/>
    </div>
  );
}
