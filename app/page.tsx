import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import PracticeAreas from '@/components/PracticeAreas';
import TeamPreview from '@/components/TeamPreview';
import BlogPreview from '@/components/BlogPreview';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Saksham & Associates - Justice. Integrity. Excellence.',
  description: 'Leading law firm providing comprehensive legal services in civil, criminal, corporate, family, IPR, and cyber law. Expert legal representation with integrity and excellence.',
  keywords: 'law firm, legal services, civil law, criminal law, corporate law, family law, IPR, cyber law, Delhi lawyers',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <PracticeAreas />
      <TeamPreview />
      <BlogPreview />
      <ContactForm />
      <Footer />
    </div>
  );
}