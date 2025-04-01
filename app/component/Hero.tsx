"use client";
import InfiniteLogoMarquee from "./InfiniteLogoMarquee";
import ResumeStats from "./ResumeStats";


const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#ffffff] to-white dark:from-[#0a0a0a] dark:to-[#121212] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}

          <div className="flex flex-col space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unlock Your Superpowers with,{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Your All-in-One Carrier Copilot Resume--Interview
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  8K+
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Resume Created
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  3.2K+
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Interviews Done
                </span>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 w-fit">
              Activate Applically AI Now
            </button>
          </div>

          {/* Right side - Statistics Display */}
          <div className="flex flex-col space-y-6">
            {/* Image above the Resume Stats */}
            {/* <div className="flex justify-center">
              <div className="relative w-full h-64 md:h-80">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="AI Interview Preparation" 
                  fill
                  className="object-cover rounded-lg "
                  priority
                />
              </div>
            </div> */}

            {/* Resume Stats box */}
            <div className="bg-white rounded-lg p-6">
              <ResumeStats />
            </div>
          </div>
        </div>

        {/* Companies section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            200+ people from the most exciting companies and organizations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Approves Applically as Best Choice
          </p>
        </div>
      </div>

      {/* Infinite Scroll */}
      <InfiniteLogoMarquee />
    </section>
  );
};

export default Hero;
