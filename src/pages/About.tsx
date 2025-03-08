import React from 'react';
import { GraduationCap, Languages, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-mint/20 to-primary-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Julie Wilde, MA, LMHC, CMHS
              </h1>
              <p className="text-xl text-primary-blue font-semibold mb-8">
                Licensed Mental Health Counselor
              </p>
              <div className="flex items-center space-x-4 text-primary-blue mb-8">
                <Languages size={24} />
                <span className="text-lg">Services available in English & Spanish</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-mint/10 to-primary-blue/10 transform -rotate-6 rounded-lg"></div>
              <img
                src="/headshot5.webp"
                alt="Julie Wilde"
                className="relative w-full h-[600px] object-cover object-top rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              As a Licensed Mental Health Counselor with specialized certification in Mental Health Services, 
              I am dedicated to providing compassionate, evidence-based therapy to help individuals, couples, 
              and families navigate life's challenges and achieve emotional wellness.
            </p>
            <p>
              I believe in creating a safe, non-judgmental space where you can explore your thoughts 
              and feelings freely. Using a blend of cognitive-behavioral therapy, mindfulness practices, 
              and other therapeutic modalities, I tailor my approach to meet your unique needs and circumstances.
            </p>
            <p>
              Whether you're dealing with anxiety, depression, relationship issues, or trauma, 
              I'm here to support you on your journey to healing and growth. My goal is to empower you 
              with the tools and insights needed to foster resilience and emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gradient-to-r from-primary-mint/10 to-primary-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Education & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-16 h-16 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Education
              </h3>
              <p className="text-gray-600 text-center">
                Master's in Counseling Psychology<br />
                Gonzaga University
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Licensure
              </h3>
              <p className="text-gray-600 text-center">
                Licensed Mental Health Counselor<br />
                Washington State Department of Health
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <Languages className="w-16 h-16 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Languages
              </h3>
              <p className="text-gray-600 text-center">
                Fluent in English & Spanish<br />
                Culturally Sensitive Care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;