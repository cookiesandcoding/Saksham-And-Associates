import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Saksham & Associates',
  description: 'Get in touch with Saksham & Associates for legal consultation. Contact our experienced attorneys for civil, criminal, corporate, family, IPR, and cyber law matters.',
  keywords: 'contact lawyer, legal consultation, law firm contact, Delhi lawyers contact',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your legal needs? Get in touch with our experienced attorneys today.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      
      <Footer />
    </div>
  );
}