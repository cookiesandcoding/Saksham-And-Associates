import React from 'react';
import Link from 'next/link';
import { Scale, Shield, Building, Heart, Lightbulb, Monitor } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: Scale,
      title: 'Civil Law',
      description: 'Comprehensive civil litigation services including property disputes, contract law, and tort claims.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Shield,
      title: 'Criminal Law',
      description: 'Expert defense representation in criminal cases with a focus on protecting your rights.',
      color: 'bg-red-100 text-red-800'
    },
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Business law services including company formation, mergers, acquisitions, and compliance.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Sensitive handling of family matters including divorce, custody, and matrimonial disputes.',
      color: 'bg-pink-100 text-pink-800'
    },
    {
      icon: Lightbulb,
      title: 'Intellectual Property',
      description: 'Protection of patents, trademarks, copyrights, and trade secrets for individuals and businesses.',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      icon: Monitor,
      title: 'Cyber Law',
      description: 'Specialized legal services for cyber crimes, data protection, and digital privacy issues.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide comprehensive legal services across various practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                <area.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <Link 
                href="/practicing-areas" 
                className="text-blue-800 font-semibold hover:text-blue-900 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/practicing-areas" 
            className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 inline-block"
          >
            View All Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;