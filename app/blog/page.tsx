import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Blog - Saksham & Associates',
  description: 'Stay updated with latest legal insights, case studies, and expert opinions from our experienced attorneys. Legal articles on various practice areas.',
  keywords: 'legal blog, law articles, legal insights, case studies, legal news, law firm blog',
};

export default function Blog() {
  const blogPosts = [
    {
      title: 'Understanding Your Rights in Civil Litigation',
      excerpt: 'A comprehensive guide to civil litigation process and your rights as a plaintiff or defendant. Learn about the key stages of civil litigation and how to protect your interests.',
      author: 'Adv. Saksham Sharma',
      date: 'March 15, 2024',
      category: 'Civil Law',
      slug: 'understanding-civil-litigation-rights',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Corporate Compliance: What Every Business Needs to Know',
      excerpt: 'Essential compliance requirements for businesses and how to avoid legal pitfalls. A detailed overview of regulatory compliance in the corporate world.',
      author: 'Adv. Priya Verma',
      date: 'March 10, 2024',
      category: 'Corporate Law',
      slug: 'corporate-compliance-guide',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read',
      featured: true
    },
    {
      title: 'Protecting Your Intellectual Property in the Digital Age',
      excerpt: 'How to safeguard your innovations and creative works in an increasingly digital world. Understanding IP protection strategies for modern businesses.',
      author: 'Adv. Rajesh Kumar',
      date: 'March 5, 2024',
      category: 'IPR Law',
      slug: 'intellectual-property-digital-age',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min read',
      featured: true
    },
    {
      title: 'Family Law: Navigating Divorce Proceedings',
      excerpt: 'A sensitive guide to understanding divorce proceedings, child custody, and property division. Learn about your rights and options during this challenging time.',
      author: 'Adv. Priya Verma',
      date: 'February 28, 2024',
      category: 'Family Law',
      slug: 'navigating-divorce-proceedings',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '9 min read',
      featured: false
    },
    {
      title: 'Cybercrime Laws: Recent Developments and Implications',
      excerpt: 'Understanding the latest developments in cybercrime laws and their implications for individuals and businesses in the digital era.',
      author: 'Adv. Rajesh Kumar',
      date: 'February 25, 2024',
      category: 'Cyber Law',
      slug: 'cybercrime-laws-developments',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '5 min read',
      featured: false
    },
    {
      title: 'Banking Law: Understanding Financial Regulations',
      excerpt: 'A comprehensive overview of banking laws and financial regulations that affect both individuals and businesses in their financial dealings.',
      author: 'Adv. Amit Singh',
      date: 'February 20, 2024',
      category: 'Banking Law',
      slug: 'banking-law-financial-regulations',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '6 min read',
      featured: false
    },
    {
      title: 'Environmental Law: Corporate Responsibility and Compliance',
      excerpt: 'Understanding environmental regulations and corporate responsibilities in environmental protection and sustainable business practices.',
      author: 'Adv. Kavya Patel',
      date: 'February 15, 2024',
      category: 'Environmental Law',
      slug: 'environmental-law-corporate-responsibility',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'Immigration Law: Recent Policy Changes and Their Impact',
      excerpt: 'Latest updates on immigration policies and their impact on visa applications, work permits, and permanent residency applications.',
      author: 'Adv. Neha Gupta',
      date: 'February 10, 2024',
      category: 'Immigration Law',
      slug: 'immigration-law-policy-changes',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '8 min read',
      featured: false
    },
    {
      title: 'Criminal Defense: Your Rights During Investigation',
      excerpt: 'Know your rights during criminal investigation and how to protect yourself. A guide to understanding the criminal justice process.',
      author: 'Adv. Saksham Sharma',
      date: 'February 5, 2024',
      category: 'Criminal Law',
      slug: 'criminal-defense-investigation-rights',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '10 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Civil Law', 'Corporate Law', 'IPR Law', 'Family Law', 'Cyber Law', 'Banking Law', 'Environmental Law', 'Immigration Law', 'Criminal Law'];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights & Updates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with our latest articles on legal developments, case studies, 
              and expert insights from our experienced attorneys
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-800 font-semibold hover:text-blue-900 transition-colors inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">All Articles</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-800 font-semibold hover:text-blue-900 transition-colors inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}