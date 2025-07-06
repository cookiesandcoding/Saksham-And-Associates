import React from 'react';
import Link from 'next/link';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Cases Won', value: '95%' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: CheckCircle, label: 'Success Rate', value: '98%' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Saksham & Associates
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 15 years of experience in the legal field, Saksham & Associates has established 
              itself as a trusted name in legal services. Our firm specializes in various areas of law, 
              providing comprehensive legal solutions to individuals and businesses.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe in building long-term relationships with our clients based on trust, transparency, 
              and results. Our team of experienced attorneys is dedicated to protecting your rights and 
              achieving the best possible outcomes for your legal matters.
            </p>
            <Link 
              href="/about" 
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;