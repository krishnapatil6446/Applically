"use client";


import VideoPlaceholder from "./VideoPlaceholder";
import CompanyMarquee from "./CompanyMarquee";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8f9fa] to-white dark:from-[#0a0a0a] dark:to-[#121212] py-16 md:py-24">
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

          {/* Right side - Video Placeholder */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <VideoPlaceholder />
            <div className="absolute bottom-4 left-0 right-0 text-center z-20">
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-black/90 p-2 mx-auto rounded-lg shadow-lg max-w-md">
                Interview Copilot generating actionable guidance for interviews
                in real-time
              </p>
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

      {/* Company Marquee */}
      <CompanyMarquee />
    </section>
  );
};

export default Hero;
