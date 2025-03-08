import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  const insuranceProviders = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'First Choice Health',
    'Kaiser Permanente',
    'Premera Blue Cross',
    'Regence',
    'United Healthcare',
    'Other'
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-mint/20 to-primary-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to begin your journey to wellness? Contact me to schedule a consultation 
              or learn more about my services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:509-940-7838" className="hover:text-primary-blue">
                        (509) 940-7838
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:julie@mentalwellnesssolutions.com" className="hover:text-primary-blue">
                        julie@mentalwellnesssolutions.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Office Location</h3>
                    <p className="text-gray-600">
                      1201 Jadwin Ave, Suite 101<br />
                      Richland, WA 99352
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-6">
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

              {/* Google Maps Embed */}
              <div className="mt-8 h-[300px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.4!2d-119.2754!3d46.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54987a7ca8081c5f%3A0x4e0c5ca6a0e51b1!2s1201%20Jadwin%20Ave%2C%20Richland%2C%20WA%2099352!5e0!3m2!1sen!2sus!4v1647894521584!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Send Me a Message
              </h2>
              <form 
                name="contact" 
                method="POST" 
                className="space-y-6"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  />
                </div>

                {/* Subject/Reason */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Reason for Contact *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  >
                    <option value="">Please select...</option>
                    <option value="Schedule Appointment">Schedule an Appointment</option>
                    <option value="Insurance Question">Insurance Question</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Request Information">Request More Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="space-y-2">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        required
                        className="form-radio text-primary-blue focus:ring-primary-blue"
                      />
                      <span className="ml-2">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        className="form-radio text-primary-blue focus:ring-primary-blue"
                      />
                      <span className="ml-2">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Best Time to Contact */}
                <div>
                  <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700">
                    Best Time to Contact
                  </label>
                  <select
                    id="bestTime"
                    name="bestTime"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  >
                    <option value="">Please select...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 3PM)</option>
                    <option value="evening">Evening (3PM - 5PM)</option>
                  </select>
                </div>

                {/* Insurance Provider */}
                <div>
                  <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">
                    Insurance Provider
                  </label>
                  <select
                    id="insurance"
                    name="insurance"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  >
                    <option value="">Please select...</option>
                    {insuranceProviders.map((provider) => (
                      <option key={provider} value={provider}>{provider}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring focus:ring-primary-blue/20 transition-colors duration-200"
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="form-checkbox mt-1 text-primary-blue focus:ring-primary-blue rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I consent to having this website store my submitted information so they can respond to my inquiry. I understand that this form is protected by reCAPTCHA and the Google{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                        Terms of Service
                      </a>
                      {' '}apply. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;