import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Facebook } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/profile.php?id=100063766080497',
    icon: <Facebook size={24} />,
    label: 'Facebook'
  },
  {
    href: 'https://www.healthgrades.com/providers/julie-wilde-38b4h',
    icon: <img src="/healthgrades.svg" alt="Healthgrades" className="w-6 h-6" />,
    label: 'Healthgrades'
  }
];

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-white min-h-[calc(100vh-4rem)]"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Mobile Image */}
          <div className="block md:hidden">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/headshot5.webp"
                type="image/webp"
              />
              <img
                src="/headshot5.webp"
                alt="Julie Wilde, Mental Health Counselor"
                className="w-full h-[500px] object-cover object-top rounded-lg shadow-lg"
                loading="eager"
                fetchpriority="high"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))'
                }}
              />
            </picture>
          </div>

          {/* Content */}
          <div className="z-10 flex flex-col justify-center py-8 md:py-12">
            <header className="mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Julie Wilde
              </h1>
              <p className="text-lg sm:text-xl text-primary-blue font-semibold mb-2 md:mb-4">
                MA, LMHC, CMHS
              </p>
              <p className="font-medium text-gray-600">Mental Wellness Solutions, PLLC</p>
            </header>

            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl">
              Welcome to Mental Wellness Solutions. As a Licensed Mental Health Counselor with specialized certifications, I'm dedicated to providing compassionate, professional support to help you navigate life's challenges and achieve emotional well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/contact"
                className="btn-primary text-center sm:text-left group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                aria-label="Schedule a consultation"
              >
                <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                <span>Schedule Consultation</span>
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                aria-label="Learn more about our services"
              >
                Learn More
              </Link>
              <Link
                to="/faq"
                className="btn-secondary text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                aria-label="View frequently asked questions"
              >
                FAQ
              </Link>
            </div>

            <div className="flex items-center space-x-4" aria-label="Social Media Links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-navy hover:text-primary-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue rounded-full p-1"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet Image */}
          <div 
            className="hidden md:block relative h-full"
            aria-hidden="true"
          >
            <div className="absolute inset-0 flex items-center justify-end">
              <img
                src="/headshot5.webp"
                alt=""
                className="h-[calc(100vh-4rem)] w-auto object-cover object-top rounded-lg shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))',
                  maxHeight: 'min(800px, calc(100vh - 4rem))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;