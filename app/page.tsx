import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TimelineSection from "./component/TimelineSection";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import PricingSection from "./component/PricingSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress className="top-[65px]" />
      <Navbar />
      <Hero />
      <TimelineSection />

      <PricingSection />
    </div>
  );
}
