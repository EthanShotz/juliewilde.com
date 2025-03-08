import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/faqData';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary-navy mb-6 pb-3 border-b border-gray-200">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((faq, index) => {
                const globalIndex = categoryIndex * 100 + index; // Unique index for each FAQ
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="font-medium text-primary-navy pr-8">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="flex-shrink-0 text-primary-blue" />
                      ) : (
                        <ChevronDown className="flex-shrink-0 text-primary-blue" />
                      )}
                    </button>
                    <div
                      className={`transition-all duration-200 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="p-4 bg-white text-gray-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;