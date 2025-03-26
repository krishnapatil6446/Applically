"use client";

import VideoPlaceholder from "./VideoPlaceholder";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
const Hero = () => {

  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);


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
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
    </section>
  );
};

export default Hero;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
