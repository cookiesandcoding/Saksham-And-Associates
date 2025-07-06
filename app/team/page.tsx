import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Linkedin, Award, BookOpen, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team - Saksham & Associates',
  description: 'Meet our expert team of attorneys specializing in various areas of law. Experienced legal professionals dedicated to achieving the best outcomes for our clients.',
  keywords: 'legal team, attorneys, lawyers, legal experts, Delhi law firm team',
};

export default function Team() {
  const teamMembers = [
    {
      name: 'Adv. Saksham Sharma',
      position: 'Senior Partner & Founder',
      specialization: 'Civil & Criminal Law',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'saksham@sakshamassociates.com',
      phone: '+91 98765 43210',
      experience: '15+ years',
      education: 'LLB, Delhi University; LLM, Harvard Law School',
      achievements: ['500+ cases handled', 'Supreme Court advocate', 'Legal excellence award 2023'],
      bio: 'Adv. Saksham Sharma is the founder and senior partner of Saksham & Associates. With over 15 years of experience in civil and criminal law, he has successfully represented clients in complex legal matters and has argued cases before the Supreme Court of India.'
    },
    {
      name: 'Adv. Priya Verma',
      position: 'Partner',
      specialization: 'Corporate & Family Law',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'priya@sakshamassociates.com',
      phone: '+91 98765 43211',
      experience: '12+ years',
      education: 'LLB, National Law University; MBA, IIM Delhi',
      achievements: ['Corporate law expert', 'Family court specialist', 'Women lawyer of the year 2022'],
      bio: 'Adv. Priya Verma specializes in corporate and family law with over 12 years of experience. She has helped numerous businesses navigate complex legal challenges and has been recognized for her expertise in matrimonial and family disputes.'
    },
    {
      name: 'Adv. Rajesh Kumar',
      position: 'Associate Partner',
      specialization: 'IPR & Cyber Law',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'rajesh@sakshamassociates.com',
      phone: '+91 98765 43212',
      experience: '8+ years',
      education: 'LLB, NLSIU Bangalore; Diploma in Cyber Law',
      achievements: ['Cyber law specialist', 'Patent attorney', 'Tech legal advisor'],
      bio: 'Adv. Rajesh Kumar is an expert in intellectual property rights and cyber law. He has assisted numerous startups and tech companies with IP protection and has extensive experience in handling cybercrime cases.'
    },
    {
      name: 'Adv. Neha Gupta',
      position: 'Senior Associate',
      specialization: 'Immigration & International Law',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'neha@sakshamassociates.com',
      phone: '+91 98765 43213',
      experience: '6+ years',
      education: 'LLB, Jamia Millia Islamia; LLM, Oxford University',
      achievements: ['Immigration law expert', 'International arbitration certified', 'Rising star award 2021'],
      bio: 'Adv. Neha Gupta specializes in immigration and international law. She has helped hundreds of clients with visa applications, international business law, and cross-border legal matters.'
    },
    {
      name: 'Adv. Amit Singh',
      position: 'Associate',
      specialization: 'Banking & Finance Law',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'amit@sakshamassociates.com',
      phone: '+91 98765 43214',
      experience: '5+ years',
      education: 'LLB, Symbiosis Law School; CA, ICAI',
      achievements: ['Banking law specialist', 'Financial crimes expert', 'Chartered accountant'],
      bio: 'Adv. Amit Singh combines his legal expertise with financial knowledge as a qualified chartered accountant. He specializes in banking law, financial regulations, and economic offenses.'
    },
    {
      name: 'Adv. Kavya Patel',
      position: 'Junior Associate',
      specialization: 'Environmental & Constitutional Law',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'kavya@sakshamassociates.com',
      phone: '+91 98765 43215',
      experience: '3+ years',
      education: 'LLB, Gujarat National Law University; Environmental Law Certificate',
      achievements: ['Environmental advocate', 'Constitutional law researcher', 'Young lawyer award 2023'],
      bio: 'Adv. Kavya Patel is passionate about environmental and constitutional law. She has worked on several landmark environmental cases and constitutional matters, advocating for public interest and environmental protection.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our experienced attorneys are dedicated to providing exceptional legal services 
              and achieving the best outcomes for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-600 mb-4">{member.specialization}</p>
                    
                    <div className="flex items-center mb-4">
                      <Award className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{member.experience} Experience</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{member.education}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                      <Phone className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                      <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Team in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Expert Attorneys</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Practice Areas</div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}