import React from 'react';

const IntegrationsSection: React.FC = () => {
  const topRowCategories = [
    'IT & Tech', 
    'Sales & Customer Roles', 
    'Graduates', 
    'International Job Seekers', 
    'Freelancers & Contractors', 
    'Engineers & Tech', 
    'Executives'
  ];

  const bottomRowCategories = [
    'IT & Tech',
    'Executives & Leaders', 
    'Freelancers & Contractors', 
    'MBA & Grad Applicants', 
    'Career Changers', 
    'Sales & Customer Roles', 
    'International'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-blue-500 font-semibold uppercase tracking-wide">
          Integrations
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">
          AI-Powered Interview Coaching
          <br />
          for Every Career Stage
        </h2>
        <p className="text-xl text-gray-600">
          Unlock smarter interview preparation with seamless AI integrations—personalized for your career path.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-wrap justify-center gap-3">
          {topRowCategories.map((category) => (
            <span 
              key={category} 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {bottomRowCategories.map((category) => (
            <span 
              key={category} 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;