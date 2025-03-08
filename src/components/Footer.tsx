import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mental Wellness Solutions, PLLC</h3>
            <div className="space-y-2">
              <p className="font-medium mb-2">Julie Wilde, MA, LMHC, CMHS</p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-yellow" />
                <a href="tel:509-940-7838" className="hover:text-primary-yellow">
                  (509) 940-7838
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-yellow" />
                <a
                  href="mailto:julie@mentalwellnesssolutions.com"
                  className="hover:text-primary-yellow"
                >
                  julie@mentalwellnesssolutions.com
                </a>
              </p>
              <p className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-yellow" />
                1201 Jadwin Ave, Ste 101, Richland, WA 99352
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100063766080497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-yellow"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.healthgrades.com/providers/julie-wilde-38b4h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-yellow"
                >
                  <img src="/healthgrades.svg" alt="Healthgrades" className="w-6 h-6 invert hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <p>If you are experiencing a mental health emergency, please call 911 or visit your nearest emergency room.</p>
            <p className="mt-2">
              National Crisis Hotline: <br />
              <a href="tel:988" className="hover:text-primary-yellow">988</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Mental Wellness Solutions, PLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;