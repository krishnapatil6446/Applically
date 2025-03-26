"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define types for improved type safety
interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItemData;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-lg font-medium"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span>{item.question}</span>
        {isOpen ? (
          <ChevronUp className="text-gray-500" />
        ) : (
          <ChevronDown className="text-gray-500" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-content-${item.question
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqData: FAQItemData[] = [
    {
      question: "What is acme.ai?",
      answer:
        "Acme.ai is an innovative AI platform designed to help developers and businesses leverage cutting-edge artificial intelligence technologies.",
    },
    {
      question: "How can I get started with acme.ai?",
      answer:
        "Getting started is simple. Sign up for an account, explore our documentation, and begin integrating AI models into your projects within minutes.",
    },
    {
      question: "What types of AI models does acme.ai support?",
      answer:
        "We support a wide range of AI models including natural language processing, computer vision, machine learning, and generative AI models.",
    },
    {
      question: "Is acme.ai suitable for beginners in AI development?",
      answer:
        "Absolutely! Our platform offers intuitive tools, comprehensive documentation, and robust support to help beginners learn and grow in AI development.",
    },
    {
      question: "What kind of support does acme.ai provide?",
      answer:
        "We offer 24/7 technical support, extensive documentation, community forums, and personalized assistance to ensure your success.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently asked questions
      </h1>
      <p className="text-gray-500 text-center mb-8 text-sm">FAQ</p>

      {faqData.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}

      <div className="text-center mt-8">
        <p className="text-gray-600">
          Still have questions? Email us at{" "}
          <a
            href="mailto:info@applically.com"
            className="text-blue-500 hover:underline"
          >
            info@applically.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
