'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { Upload, FileText, Users, Award, TrendingUp, Heart } from 'lucide-react';

interface JoinUsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  specialization: string;
  coverLetter: string;
  resume: FileList;
}

export default function JoinUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<JoinUsFormData>();

  const onSubmit = async (data: JoinUsFormData) => {
    setIsSubmitting(true);
    // Handle form submission here
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your interest! We will review your application and get back to you soon.');
    reset();
    setIsSubmitting(false);
  };

  const positions = [
    'Associate Attorney',
    'Senior Associate',
    'Partner Track',
    'Legal Intern',
    'Paralegal',
    'Legal Assistant',
    'Other'
  ];

  const specializations = [
    'Civil Law',
    'Criminal Law',
    'Corporate Law',
    'Family Law',
    'Intellectual Property',
    'Cyber Law',
    'Banking Law',
    'Environmental Law',
    'Immigration Law',
    'Multiple Areas'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with experienced attorneys in a supportive and collaborative team environment.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and clear career advancement paths.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based bonuses and benefits.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and emphasis on maintaining work-life balance.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Build your legal career with one of Delhi's most respected law firms. 
              We're looking for talented individuals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose Saksham & Associates?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join a firm that values excellence, integrity, and professional development. 
              Here's what makes us a great place to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Apply Now
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to take the next step in your legal career? Fill out our application form below.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-8">
            {/* Personal Information */}
            <div className="mb-8">
             {/* <h3 className="text-xl font-semibold text-blue-900 mb-6">Personal Information</h3>*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                  
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    {...register('position', { required: 'Position is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    {...register('experience', { required: 'Experience is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                  {errors.experience && (
                    <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Specialization *
                </label>
                <select
                  id="specialization"
                  {...register('specialization', { required: 'Specialization is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
                {errors.specialization && (
                  <p className="mt-1 text-sm text-red-600">{errors.specialization.message}</p>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div className="mb-8">
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter *
              </label>
              <textarea
                id="coverLetter"
                {...register('coverLetter', { required: 'Cover letter is required' })}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us why you want to join our team and what you can bring to our firm..."
              ></textarea>
              {errors.coverLetter && (
                <p className="mt-1 text-sm text-red-600">{errors.coverLetter.message}</p>
              )}
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Resume/CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload your resume/CV</p>
                <p className="text-sm text-gray-500 mb-4">PDF, DOC, or DOCX format (max 5MB)</p>
                <input
                  type="file"
                  id="resume"
                  {...register('resume', { required: 'Resume is required' })}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="bg-blue-800 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-900 transition-colors"
                >
                  Choose File
                </label>
              </div>
              {errors.resume && (
                <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-800 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Questions About Your Application?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you have any questions about the application process or available positions, 
            please don't hesitate to contact our HR department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hr@sakshamassociates.com" 
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200"
            >
              Email HR Department
            </a>
            <a 
              href="tel:+919876543210" 
              className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors duration-200"
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