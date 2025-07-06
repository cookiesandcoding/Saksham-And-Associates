import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: 'Understanding Your Rights in Civil Litigation',
      excerpt: 'A comprehensive guide to civil litigation process and your rights as a plaintiff or defendant.',
      author: 'Adv. Saksham Sharma',
      date: 'March 15, 2024',
      category: 'Civil Law',
      slug: 'understanding-civil-litigation-rights',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Corporate Compliance: What Every Business Needs to Know',
      excerpt: 'Essential compliance requirements for businesses and how to avoid legal pitfalls.',
      author: 'Adv. Priya Verma',
      date: 'March 10, 2024',
      category: 'Corporate Law',
      slug: 'corporate-compliance-guide',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Protecting Your Intellectual Property in the Digital Age',
      excerpt: 'How to safeguard your innovations and creative works in an increasingly digital world.',
      author: 'Adv. Rajesh Kumar',
      date: 'March 5, 2024',
      category: 'IPR Law',
      slug: 'intellectual-property-digital-age',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Latest Legal Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Stay informed with our latest articles on legal developments, 
            case studies, and expert insights from our attorneys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
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
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-800 font-semibold hover:text-blue-900 transition-colors inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;