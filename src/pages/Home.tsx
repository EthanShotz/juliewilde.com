import React from 'react';
import { Heart, Star } from 'lucide-react';
import HeroSection from '../components/hero/HeroSection';
import QuoteSection from '../components/QuoteSection';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Remove the mt-16 class and adjust the spacing to match other pages */}
      <div>
        <HeroSection />
      </div>
      <div className="-mt-px">
        <QuoteSection />
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">Hear from those who've experienced positive change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-primary-mint/5 to-primary-blue/5 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffd166] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Julie is professional, compassionate, highly educated with the different types of therapy. She strongly cares."
              </p>
              <p className="font-semibold text-primary-navy">- Jane</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-primary-mint/5 to-primary-blue/5 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffd166] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Great source for counseling"
              </p>
              <p className="font-semibold text-primary-navy">- Katy</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-primary-mint/5 to-primary-blue/5 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffd166] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Julie is the best therapist I've ever had. She is deeply compassionate, listens attentively, and approaches problem-solving with a collaborative spirit that makes every session productive."
              </p>
              <p className="font-semibold text-primary-navy">- Ethan</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=julie+wilde+email&rlz=1C1GCEA_enUS1143US1144&ie=UTF-8&dlnr=1#dlnr=1&lrd=0x54987ac1f0dc0da1:0x14bba9c7aeee31ee,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Star className="mr-2" size={20} />
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Mental Wellness Solutions?</h2>
            <p className="text-lg text-gray-600">Professional care tailored to your unique needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-primary-blue" />,
                title: 'Licensed Professional',
                description: 'Benefit from evidence-based therapy with a certified Mental Health Counselor (LMHC, CMHS).',
              },
              {
                icon: <span className="text-4xl">🌎</span>,
                title: 'Bilingual Services',
                description: 'Offering therapy in both English and Spanish to better serve our diverse community.',
              },
              {
                icon: <span className="text-4xl">🎓</span>,
                title: 'Expert Guidance',
                description: 'Masters-level education combined with years of professional experience in mental health care.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;