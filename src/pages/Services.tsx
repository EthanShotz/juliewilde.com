import React from 'react';
import { Users, Brain, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary-blue" />,
      title: 'Individual Therapy',
      description: 'One-on-one counseling sessions tailored to your unique needs, helping you navigate personal challenges and achieve emotional wellness.',
      details: [
        'Anxiety & Depression',
        'Trauma Recovery',
        'Personal Growth',
        'Stress Management',
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary-blue" />,
      title: 'Couples & Family Counseling',
      description: 'I help strengthen relationships and improve communication with your loved ones through guided therapy sessions.',
      details: [
        'Relationship Issues',
        'Communication Skills',
        'Conflict Resolution',
        'Family Dynamics',
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-blue" />,
      title: 'Trauma Recovery',
      description: 'I provide specialized support for healing from past trauma using evidence-based approaches in a safe, compassionate environment.',
      details: [
        'PTSD Treatment',
        'Emotional Processing',
        'Coping Strategies',
        'Healing & Growth',
      ]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary-blue" />,
      title: 'Specialized Programs',
      description: 'I offer focused therapeutic programs designed to address specific needs and goals.',
      details: [
        'Grief Counseling',
        'Stress Reduction',
        'Life Transitions',
        'Personal Development',
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-mint/20 to-primary-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Professional Therapy Services
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              I offer comprehensive mental health services in both English and Spanish, 
              tailored to meet your unique needs and goals.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-mint/10 to-primary-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards emotional wellness. Contact me to schedule 
            a consultation and learn more about how I can help.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;