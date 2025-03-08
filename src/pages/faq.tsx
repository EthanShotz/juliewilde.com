import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-mint/20 to-primary-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about therapy services, insurance coverage, and what to expect during your sessions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <FAQ />
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-mint/10 to-primary-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out if you need more information or would like to schedule a consultation.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;