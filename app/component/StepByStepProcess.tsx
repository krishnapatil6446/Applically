// StepByStepProcess.tsx
import React from 'react';
import Image from 'next/image';

// Updated Step interface to use imagePath instead of icon
export interface Step {
  title: string;
  subtitle: string;
  quote: string;
  points: string[];
  tagline: string;
  imagePath: string; // Path to the image in public/images folder
}

// Props for our main component
export interface StepByStepProcessProps {
  heading: string;
  subheading: string;
  steps: Step[];
}

// Individual step component
const ProcessStep: React.FC<Step> = ({ title, subtitle, quote, points, tagline, imagePath }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-indigo-900 text-white rounded-lg p-6 mb-6 w-full max-w-xs shadow-lg flex items-center justify-center">
        <div className="w-24 h-24 relative">
          <Image 
            src={imagePath}
            alt={subtitle}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <h3 className="text-xl font-bold w-full text-center mb-2">{subtitle}</h3>
      <p className="italic text-center w-full  mb-4">"{quote}"</p>
      
      <div className="space-y-2">
        {points.map((point, index) => (
          <p key={index} className="font-semibold text-center">{point}</p>
        ))}
      </div>
      
      <div className="flex items-center justify-center w-full text-center mt-6">
        <span className="text-pink-500 mr-2">🎯</span>
        <p className="italic">{tagline}</p>
      </div>
    </div>
  );
};

// Main component
const StepByStepProcess: React.FC<StepByStepProcessProps> = ({ heading, subheading, steps }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">{heading}</h1>
      <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
        {subheading}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Dotted connector lines for desktop view */}
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 border-t-2 border-dotted border-gray-200 -z-10"></div>
        
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default StepByStepProcess;