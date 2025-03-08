import React from 'react';
import { CreditCard, DollarSign, Shield, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const insuranceProviders = [
    'Cigna',
    'Aetna',
    'Blue Cross Blue Shield',
    'United Healthcare',
    'Kaiser Permanente',
    'First Choice Health',
    'Premera Blue Cross',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-mint/20 to-primary-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Insurance & Payment Options
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              I make mental health care accessible through various insurance and payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Employer Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Employee Benefits Programs
            </h2>
            <p className="text-lg text-gray-600">
              I'm proud to serve employees from major local employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Walmart Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <img
                  src="/Walmart.png"
                  alt="Walmart Logo"
                  className="h-8 object-contain"
                />
                <Building2 className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Walmart Employee Benefits
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">My Mental Health Resources (Lyra Health)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>20 no-cost therapy or mental health coaching sessions per person, per year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Available for associates and eligible dependents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Both in-person and virtual sessions available</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Additional Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Digital wellness tools through Lyra Essentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Work-life services for legal, financial, and dependent care</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    To access benefits: Visit{' '}
                    <a 
                      href="https://walmart.lyrahealth.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-blue hover:underline"
                    >
                      walmart.lyrahealth.com
                    </a>
                    {' '}or call 1-800-825-3555
                  </p>
                </div>
              </div>
            </div>

            {/* Kadlec Benefits */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <img
                  src="/Kadlec.png"
                  alt="Kadlec Logo"
                  className="h-8 object-contain"
                />
                <Users className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Kadlec Employee Benefits
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Caregiver Assistance Program</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Comprehensive mental health support and counseling services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Personal and work-related challenge management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Employee Assistance Program (EAP)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>24/7 access to counseling and support services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2 mt-2"></span>
                      <span>Support for relationship conflicts, financial concerns, and work pressures</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Access EAP services 24/7: Call 800-255-5255
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-16 bg-gradient-to-r from-primary-mint/10 to-primary-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-primary-blue" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Additional Accepted Insurance Providers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {insuranceProviders.map((provider, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg text-center text-gray-700"
                >
                  {provider}
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 text-center">
              Don't see your insurance provider? Contact me to verify your coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <CreditCard className="w-12 h-12 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Self-Pay Options
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                I accept various payment methods for your convenience:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                  Credit/Debit Cards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                  HSA/FSA Cards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                  Electronic Payments
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <DollarSign className="w-12 h-12 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Sliding Scale Fees
              </h3>
              <p className="text-gray-600 mb-4">
                I believe that quality mental health care should be accessible to everyone. 
                My sliding scale fee structure is based on income and ability to pay, 
                ensuring that you can receive the care you need.
              </p>
              <p className="text-gray-600">
                Please contact me to discuss your specific situation and determine 
                the most appropriate fee structure for your circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-mint/10 to-primary-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Questions About Coverage?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact me to verify your insurance coverage or discuss payment options 
            that work best for you.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insurance;