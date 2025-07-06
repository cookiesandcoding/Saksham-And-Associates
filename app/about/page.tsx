import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Clock, CheckCircle, Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Saksham & Associates',
  description: 'Learn about Saksham & Associates - our history, mission, values, and commitment to providing exceptional legal services with integrity and excellence.',
  keywords: 'about us, law firm history, legal expertise, mission, values, Delhi law firm',
};

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Cases Won', value: '95%' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: CheckCircle, label: 'Success Rate', value: '98%' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional legal services with unwavering commitment to justice, integrity, and client satisfaction.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and respected law firm, known for our expertise, ethical practices, and client-focused approach.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, excellence, transparency, and dedication to protecting our clients\' rights and interests.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Saksham & Associates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building trust through legal excellence for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2009, Saksham & Associates has grown from a small practice to one of Delhi's most respected law firms. Our journey began with a simple yet powerful vision: to provide accessible, high-quality legal services while maintaining the highest standards of integrity and professionalism.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Over the years, we have successfully represented hundreds of clients in diverse legal matters, from complex corporate transactions to sensitive family disputes. Our team's expertise spans multiple practice areas, ensuring comprehensive legal solutions for our clients.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to uphold our founding principles while adapting to the evolving legal landscape, incorporating modern technology and innovative approaches to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
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

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our mission, vision, and values guide every decision we make and every case we handle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <value.icon className="h-16 w-16 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Saksham & Associates?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Proven Excellence</h3>
              <p className="text-gray-600">15+ years of successful legal practice with a 98% success rate.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Skilled attorneys specializing in various areas of law.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Client-Focused</h3>
              <p className="text-gray-600">Personalized attention and dedicated service for every client.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}