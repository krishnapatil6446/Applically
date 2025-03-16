
"use client";

import React from "react";

const VideoPlaceholder = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-black/80 p-3 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Interview in progress
          </span>
        </div>
        <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full w-3/4"></div>
        </div>
      </div>

      {/* Simulated UI elements */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        <div className="bg-white/80 dark:bg-black/80 px-3 py-1 rounded-md shadow-sm">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            Interviewer
          </span>
        </div>
        <div className="bg-white/80 dark:bg-black/80 px-3 py-1 rounded-md shadow-sm">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            You
          </span>
        </div>
      </div>

      {/* Simulated chat bubbles */}
      <div className="absolute top-16 left-4 w-3/4 max-w-[200px]">
        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-sm mb-2">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Tell me about your experience with React.
          </p>
        </div>
      </div>

      <div className="absolute top-32 right-4 w-3/4 max-w-[200px]">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg shadow-sm">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            I've been working with React for 3 years...
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
