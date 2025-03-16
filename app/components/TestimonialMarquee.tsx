"use client";

import React from "react";
import Marquee from "./Marquee";

// Sample testimonial data
const testimonials = [
  {
    name: "Aisha Patel",
    role: "Consulting at Deloitte",
    quote:
      "The AI Interview Copilot gave me the confidence I needed to tackle tough questions, and it helped me land a dream job in consulting.",
    avatar: "/images/avatars/avatar-1.png",
  },
  {
    name: "Liam O'Connor",
    role: "Product at Apple",
    quote:
      "Being able to prepare for interviews with real-time AI feedback was a game changer and made me feel confident for my interview.",
    avatar: "/images/avatars/avatar-2.png",
  },
  {
    name: "Michael Johnson",
    role: "Product Manager at Salesforce",
    quote:
      "Applically AI gave me the edge I needed to break into product management. The AI Interview Copilot was super helpful.",
    avatar: "/images/avatars/avatar-3.png",
  },
  {
    name: "Ananya Sharma",
    role: "Investment Banking at Goldman Sachs",
    quote:
      "The AI Interview Copilot gave me the prep and confidence to navigate challenging interview questions, leading to my role in finance.",
    avatar: "/images/avatars/avatar-4.png",
  },
  {
    name: "Priya Singh",
    role: "Software Developer at SAP",
    quote:
      "Thanks to the AI Interview Copilot real-time feedback, I felt fully prepared and landed a role in software development.",
    avatar: "/images/avatars/avatar-5.png",
  },
  {
    name: "Sofia Rossi",
    role: "Marketing at Netflix",
    quote:
      "Real-time AI guidance during my interview prep helped me secure a position in marketing in a highly competitive environment.",
    avatar: "/images/avatars/avatar-6.png",
  },
];

const TestimonialMarquee = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Hear from our successful users
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Join the thousands of professionals who landed their dream jobs with
          the help of Applically AI.
        </p>
      </div>

      <Marquee className="py-6" pauseOnHover>
        <div className="flex gap-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-lg font-medium text-gray-600 dark:text-gray-300">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee className="py-6" reverse pauseOnHover>
        <div className="flex gap-6 px-6">
          {testimonials
            .slice()
            .reverse()
            .map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] flex-shrink-0 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center text-lg font-medium text-gray-600 dark:text-gray-300">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TestimonialMarquee;
