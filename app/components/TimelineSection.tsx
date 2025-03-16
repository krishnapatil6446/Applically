"use client";
import React from "react";
import { Timeline } from "./Timeline";

const TimelineSection = () => {
  const timelineData = [
    {
      title: "Preparation",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Get Ready for Your Interview
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Use our AI-powered tools to prepare for your upcoming interviews.
            Build a professional resume, practice with mock interviews, and get
            personalized feedback.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              AI Resume Builder
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Mock Interviews
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Auto Apply
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "During Interview",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Real-time Interview Support
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our Interview Copilot provides real-time guidance during your
            interviews. Get instant suggestions, domain knowledge support, and
            transcription services to help you ace your interview.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Interview Copilot
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Real-time Transcription
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Domain Knowledge
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Post Interview",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Analyze and Improve
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            After your interview, receive comprehensive reports and analytics to
            understand your performance. Get insights on your strengths and
            areas for improvement to prepare for future interviews.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Interview Summary
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Performance Analytics
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Sentiment Assessment
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Success",
      content: (
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Land Your Dream Job
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Join the 300,000+ professionals who have secured offers from top
            companies using Applically AI. Our comprehensive suite of tools
            helps you navigate the entire job search process with confidence.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Job Offers
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Career Growth
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
              Professional Network
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full">
      <Timeline data={timelineData} />
    </section>
  );
};

export default TimelineSection;
