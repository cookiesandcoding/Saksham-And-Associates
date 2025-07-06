'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-yellow-400">Justice.</span> <span className="text-white">Integrity.</span> <span className="text-yellow-400">Excellence.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At Saksham & Associates, we are committed to providing exceptional legal services 
              with unwavering dedication to our clients' success and the pursuit of justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
              >
                Get Legal Help
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Legal Excellence</h3>
              </div>
              <p className="text-blue-100">
                Decades of combined experience in various legal domains ensuring the best outcomes for our clients.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Client Protection</h3>
              </div>
              <p className="text-blue-100">
                Your interests are our priority. We provide comprehensive legal protection and advisory services.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Expert Team</h3>
              </div>
              <p className="text-blue-100">
                Our skilled attorneys specialize in different areas of law to provide comprehensive legal solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;