import React from "react";

const PricingTable = () => {
  const plans = [
    {
      title: "Existing Components",
      tagline: "",
      price: "Free",
      period: "",
      description:
        "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support",
      ],
      buttonText: "Browse Components",
      highlighted: false,
    },
    {
      title: "Custom Components",
      tagline: "pause or cancel anytime",
      price: "$4995",
      period: "/mo",
      description:
        "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
      features: [
        "As many components as possible in a month",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "24-hour support response time",
        "Private communication channel",
        "4-7 days turnaround time",
        "Pause or cancel anytime",
      ],
      buttonText: "Buy Now",
      highlighted: false,
    },
    {
      title: "Pages",
      tagline: "pause or cancel anytime",
      price: "$6995",
      period: "/mo",
      description:
        "Best for early-stage startups and businesses that need a marketing site and ongoing developmental work.",
      features: [
        "One request / page at a time",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "CMS integration",
        "Search Engine Optimization",
        "24-hour support response time",
        "Private communication channel",
        "7-10 days turnaround time",
        "Pause or cancel anytime",
      ],
      buttonText: "Buy Now",
      highlighted: true,
    },
    {
      title: "Multi Page Website",
      tagline: "starts at",
      price: "$19,499",
      period: "",
      description:
        "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
      features: [
        "Multi-page landing page website",
        "Web Apps and SaaS Development",
        "AI Apps development",
        "Design + Development",
        "24-hour support response time",
        "Private communication channel",
        "Unlimited Revisions",
        "Negotiable delivery time",
      ],
      buttonText: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Modified this container to better center cards on mobile */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 w-full max-w-xs md:max-w-72 rounded-lg p-4 flex flex-col ${
                plan.highlighted
                  ? "bg-blue-900 text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="mb-4">
                <h3
                  className={`text-lg font-medium ${
                    plan.highlighted ? "text-blue-100" : "text-blue-600"
                  }`}
                >
                  {plan.title}
                </h3>
                {plan.tagline && (
                  <p className="text-xs mt-1 text-gray-500">{plan.tagline}</p>
                )}
              </div>

              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="ml-1 text-lg">{plan.period}</span>
                )}
              </div>

              <p
                className={`mb-4 text-sm ${
                  plan.highlighted ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div
                      className={`rounded-full p-1 mr-2 flex-shrink-0 ${
                        plan.highlighted ? "bg-blue-700" : "bg-blue-100"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 ${
                          plan.highlighted ? "text-blue-200" : "text-blue-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span
                      className={
                        plan.highlighted ? "text-blue-100" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium text-sm ${
                  plan.highlighted
                    ? "bg-blue-400 text-blue-900 hover:bg-blue-300"
                    : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"
                } transition-colors duration-150`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
