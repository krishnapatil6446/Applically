// components/PricingSection.tsx
import React from 'react';

interface Feature {
  text: string;
}

interface PricingPlan {
  title: string;
  price?: string;
  period?: string;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
}

interface PricingCardProps extends PricingPlan {}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  isHighlighted = false 
}) => {
  return (
    <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden w-full ${
      isHighlighted 
        ? 'border-2 border-blue-500 transform scale-105 z-10 bg-gray-900' 
        : 'border border-gray-800 bg-black'
    }`}>
      <div className={`px-6 py-8 ${isHighlighted ? 'bg-blue-900' : 'bg-gray-900'}`}>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        {price && (
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-extrabold text-white">{price}</span>
            {period && <span className="ml-1 text-xl font-medium text-gray-300">/{period}</span>}
          </div>
        )}
      </div>
      <div className="flex-1 px-6 pt-6 pb-8 bg-opacity-50">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-300">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button
            type="button"
            className={`w-full px-4 py-2 rounded-md text-white font-medium ${
              isHighlighted 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-800 hover:bg-blue-900'
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
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
    <div className="bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="w-full max-w-5xl"> {/* Changed from max-w-3xl to max-w-5xl for 75% width */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {plans.map((plan, index) => (
              <div key={index} className="flex">
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default PricingSection;