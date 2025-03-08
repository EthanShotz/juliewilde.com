// Backup of original hero section implementation
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Facebook } from 'lucide-react';

const HeroSectionV1 = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Mobile Image (shown only on mobile) */}
          <div className="block md:hidden">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/headshot2.png"
              />
              <img
                src="/headshot2.png"
                alt="Julie Wilde, Mental Health Counselor"
                className="w-full h-[400px] object-cover object-top"
                loading="eager"
                fetchpriority="high"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))'
                }}
              />
            </picture>
          </div>

          {/* Text Content */}
          <div className="z-10 flex flex-col justify-center py-8 md:py-12">
            <div className="mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Julie Wilde
              </h1>
              <p className="text-lg sm:text-xl text-primary-blue font-semibold mb-2 md:mb-4">
                MA, LMHC, CMHS
              </p>
              <p className="font-medium text-gray-600">Mental Wellness Solutions, PLLC</p>
            </div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl">
              Welcome to Mental Wellness Solutions. As a Licensed Mental Health Counselor with specialized certifications, I'm dedicated to providing compassionate, professional support to help you navigate life's challenges and achieve emotional well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/contact"
                className="btn-primary text-center sm:text-left"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-center sm:text-left"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063766080497"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-navy hover:text-primary-blue transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.healthgrades.com/providers/julie-wilde-38b4h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-navy hover:text-primary-blue transition-colors"
              >
                <img src="/healthgrades.svg" alt="Healthgrades" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Desktop/Tablet Image Container (hidden on mobile) */}
          <div className="hidden md:block relative h-[875px]">
            <div className="absolute inset-0 flex items-center justify-end">
              <img
                src="/headshot2.png"
                alt="Julie Wilde, Mental Health Counselor"
                className="h-full w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV1;