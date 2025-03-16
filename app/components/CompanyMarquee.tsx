"use client";

import React from "react";


const companies = [
  { name: "Google", logo: "/images/google.svg" },
  { name: "Microsoft", logo: "/images/microsoft.svg" },
  { name: "Amazon", logo: "/images/amazon.svg" },
  { name: "Apple", logo: "/images/apple.svg" },
  { name: "Meta", logo: "/images/meta.svg" },
  { name: "Netflix", logo: "/images/netflix.svg" },
  { name: "Salesforce", logo: "/images/salesforce.svg" },
  { name: "IBM", logo: "/images/ibm.svg" },
  { name: "Oracle", logo: "/images/oracle.svg" },
  { name: "Adobe", logo: "/images/adobe.svg" },
];

const CompanyMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-900 py-8">
      <div className="relative flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                {company.name.charAt(0)}
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                {company.name.charAt(0)}
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;
