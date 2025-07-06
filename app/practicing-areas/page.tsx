import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, Shield, Building, Heart, Lightbulb, Monitor, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Practice Areas - Saksham & Associates',
  description: 'Comprehensive legal services across civil law, criminal law, corporate law, family law, intellectual property, and cyber law. Expert legal representation in Delhi.',
  keywords: 'practice areas, civil law, criminal law, corporate law, family law, IPR, cyber law, legal services',
};

export default function PracticingAreas() {
  const areas = [
    {
      icon: Scale,
      title: 'Civil Law',
      description: 'Comprehensive civil litigation services including property disputes, contract law, tort claims, and civil rights matters.',
      services: [
        'Property Disputes',
        'Contract Law',
        'Tort Claims',
        'Civil Rights',
        'Consumer Protection',
        'Landlord-Tenant Disputes'
      ],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Shield,
      title: 'Criminal Law',
      description: 'Expert defense representation in criminal cases with a focus on protecting your rights and achieving the best possible outcome.',
      services: [
        'Criminal Defense',
        'Bail Applications',
        'Appeals',
        'White Collar Crimes',
        'Fraud Cases',
        'Cybercrime Defense'
      ],
      color: 'bg-red-100 text-red-800'
    },
    {
      icon: Building,
      title: 'Corporate Law',
      description: 'Business law services including company formation, mergers, acquisitions, compliance, and corporate governance.',
      services: [
        'Company Formation',
        'Mergers & Acquisitions',
        'Corporate Compliance',
        'Contract Drafting',
        'Employment Law',
        'Regulatory Matters'
      ],
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Heart,
      title: 'Family Law',
      description: 'Sensitive handling of family matters including divorce, custody, matrimonial disputes, and adoption proceedings.',
      services: [
        'Divorce Proceedings',
        'Child Custody',
        'Matrimonial Disputes',
        'Adoption',
        'Domestic Violence',
        'Property Settlement'
      ],
      color: 'bg-pink-100 text-pink-800'
    },
    {
      icon: Lightbulb,
      title: 'Intellectual Property',
      description: 'Protection of patents, trademarks, copyrights, and trade secrets for individuals and businesses.',
      services: [
        'Patent Filing',
        'Trademark Registration',
        'Copyright Protection',
        'Trade Secret Protection',
        'IP Litigation',
        'Licensing Agreements'
      ],
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      icon: Monitor,
      title: 'Cyber Law',
      description: 'Specialized legal services for cyber crimes, data protection, privacy issues, and digital rights.',
      services: [
        'Cybercrime Defense',
        'Data Protection',
        'Privacy Law',
        'Digital Rights',
        'Online Harassment',
        'E-commerce Law'
      ],
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Practice Areas</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with expert representation
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-lg ${area.color} flex items-center justify-center mr-4`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{area.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{area.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900 mb-3">Services Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced attorneys are ready to help you with your legal matters. 
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Consultation
            </a>
            <a 
              href="tel:+919876543210" 
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}