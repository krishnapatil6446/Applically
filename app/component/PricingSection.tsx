"use client";

import React, { useState } from 'react';

interface PricingPlan {
  title: string;
  price?: string;
  period?: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingPlan> = ({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  isHighlighted = false 
}) => {
  return (
    <div className={`
      rounded-lg 
      border 
      ${isHighlighted 
        ? 'border-blue-500 shadow-2xl scale-105 z-10 bg-blue-50' 
        : 'border-gray-200 bg-white'
      } 
      p-6 
      flex 
      flex-col 
      w-full 
      transition-all 
      duration-300
    `}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {isHighlighted && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {price && (
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {period && (
            <span className="text-gray-500 ml-1">/ {period}</span>
          )}
        </div>
      )}

      <ul className="space-y-4 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg 
              className="w-5 h-5 mr-3 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button 
        className={`
          w-full 
          py-3 
          rounded-lg 
          font-semibold 
          transition-colors 
          duration-300
          ${isHighlighted 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
          }
        `}
      >
        {buttonText}
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingPlan[] = [
    {
      title: 'Basic',
      price: '₹199',
      period: 'month',
      features: [
        '1000 AI Credit',
        'Personalised Resume',
        'Personalised Interview',
        'Unlimited Resume Generate',
        'Basic Support'
      ],
      buttonText: 'Start Basic',
      isHighlighted: false
    },
    {
      title: 'Pro',
      price: '₹499',
      period: 'month',
      features: [
        '10,000 AI Credit',
        'Highly Personalised Resume',
        'Highly Personalised Interview',
        'Unlimited Resume Generate',
        'Save Unlimited Resume',
        'Advance Support',
        'First New Update',
        'Advance Support'
      ],
      buttonText: 'Get Pro',
      isHighlighted: true
    },
    {
      title: 'Institute / College',
      features: [
        'Customise User Solution',
        'Customise AI Credit',
        'Highly Personalised Resume',
        'Highly Personalised Interview',
        'Unlimited Resume Generate',
        'Save Unlimited Resume',
        'Advance Support',
        'First New Update',
        'Data Protection'
      ],
      buttonText: 'Contact Us',
      isHighlighted: false
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[70%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the plan that&apos;s right for you
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <span className={`
              ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}
              cursor-pointer
            `}
            onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </span>
            <div 
              className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <div 
                className={`
                  absolute 
                  top-1 
                  w-4 
                  h-4 
                  bg-blue-500 
                  rounded-full 
                  transition-all 
                  duration-300
                  ${billingCycle === 'yearly' ? 'right-1' : 'left-1'}
                `}
              />
            </div>
            <span className={`
              ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}
              cursor-pointer
            `}
            onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;