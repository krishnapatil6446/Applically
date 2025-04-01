"use client";
import InfiniteLogoMarquee from "./InfiniteLogoMarquee";
import ResumeStats from "./ResumeStats";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] to-white dark:from-[#0a0a0a] dark:to-[#121212] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unlock Your Interview Superpowers with AI,{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Your AI-Powered Interview Copilot
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  250K+
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Offers Received
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  1.2M+
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Interviews Aced
                </span>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 w-fit">
              Activate AI Interview Mode Now
            </button>
          </div>

{/* Right side - Statistics Display */}
<div className="flex flex-col space-y-6">
  {/* First box - Top stats */}
  {/* <div className="bg-white rounded-lg p-6 ">

    <div className="flex flex-row justify-between items-start">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-black">↑ 38%</h3>
        <p className=" text-sm">more interviews</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-black">↑ 23%</h3>
        <p className="text-gray-700 text-sm">more likely to get a job offer</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-black">↑ 38%</h3>
        <p className="text-gray-700 text-sm">more interviews</p>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-black">↑ 23%</h3>
        <p className="text-gray-700 text-sm">more likely to get a job offer</p>
      </div>
    </div>
  </div> */}
  
  {/* Second box - Resume Stats */}
  <div className="bg-white rounded-lg p-6 ">
    <ResumeStats />

  </div>
</div>

        </div>

        {/* Companies section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            300,000+ offers from the most exciting companies and organizations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            From Day One to Final Rounds
          </p>
        </div>
      </div>
      
      {/* Infinite Scroll */}
      <InfiniteLogoMarquee />
    </section>
  );
};

export default Hero;