import React from 'react';

const ResumeStats = () => {
  const topRowStats = [
    { number: '↑ 83%', description: 'More Likely Your Resume Get Selected' },
    { number: '↑ 138%', description: 'Improved Performance In Your Real Interview' },
    { number: '75+ ATS', description: 'Personalised Resume With ATS Score of (75-96)' },
  ];

  const bottomRowStats = [
    { number: '650+', description: 'Personalised Resume Created Everyday' },
    { number: '200+', description: 'AI Mock Interview Taken Everyday' },
    { number: '<1 min', description: 'Is Just Required To Create Resume' },
    { number: '6,000+', description: 'Applicant\'s Choose Applically As First Choice' },
  ];

  return (
    <div className="w-full">
      {/* Top Row - Horizontal Layout */}
      <div className="flex flex-wrap justify-center mb-6">
        <div className="flex flex-row w-full justify-between">
          {topRowStats.map((stat, index) => (
            <div key={`top-${index}`} className="text-center px-2">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mb-6"></div>

      {/* Bottom Row - Equal spacing */}
      <div className="flex flex-row justify-between items-start">
        {bottomRowStats.map((stat, index) => (
          <div key={`bottom-${index}`} className="text-center px-1" style={{width: '24%'}}>
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeStats;