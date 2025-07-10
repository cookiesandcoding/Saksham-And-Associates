import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'understanding-civil-litigation-rights': {
    title: 'Understanding Your Rights in Civil Litigation',
    content: `
      <p>Civil litigation is a complex legal process that involves disputes between private parties, organizations, or government entities. Understanding your rights as a plaintiff or defendant is crucial to navigating this process successfully.</p>
      
      <h2>What is Civil Litigation?</h2>
      <p>Civil litigation encompasses legal disputes that seek compensation for damages or performance of specific actions, rather than criminal sanctions. These cases can involve various areas of law including contract disputes, personal injury claims, property disputes, and employment issues.</p>
      
      <h2>Your Rights as a Plaintiff</h2>
      <p>As a plaintiff initiating a civil lawsuit, you have several important rights:</p>
      <ul>
        <li><strong>Right to Legal Representation:</strong> You have the right to hire an attorney to represent your interests throughout the litigation process.</li>
        <li><strong>Right to Discovery:</strong> You can request relevant documents, conduct depositions, and gather evidence to support your case.</li>
        <li><strong>Right to a Fair Trial:</strong> You are entitled to have your case heard by an impartial judge or jury.</li>
        <li><strong>Right to Appeal:</strong> If unsatisfied with the outcome, you may have the right to appeal the decision to a higher court.</li>
      </ul>
      
      <h2>Your Rights as a Defendant</h2>
      <p>If you're being sued, you also have important rights that protect you:</p>
      <ul>
        <li><strong>Right to Notice:</strong> You must be properly served with legal documents that inform you of the lawsuit.</li>
        <li><strong>Right to Respond:</strong> You have the right to file an answer to the complaint and present your defense.</li>
        <li><strong>Right to Counterclaim:</strong> You may file a counterclaim against the plaintiff if you believe they have wronged you.</li>
        <li><strong>Right to Legal Counsel:</strong> You have the right to hire an attorney to defend you.</li>
      </ul>
      
      <h2>The Litigation Process</h2>
      <p>Civil litigation typically follows these stages:</p>
      <ol>
        <li><strong>Pleading Stage:</strong> The plaintiff files a complaint, and the defendant files an answer.</li>
        <li><strong>Discovery Phase:</strong> Both parties exchange information and evidence.</li>
        <li><strong>Pre-Trial Motions:</strong> Parties may file motions to resolve issues before trial.</li>
        <li><strong>Trial:</strong> The case is presented before a judge or jury.</li>
        <li><strong>Post-Trial:</strong> Enforcement of judgment or appeals may follow.</li>
      </ol>
      
      <h2>Protecting Your Rights</h2>
      <p>To protect your rights during civil litigation:</p>
      <ul>
        <li>Hire experienced legal counsel early in the process</li>
        <li>Maintain detailed records of all communications and documents</li>
        <li>Be honest and forthcoming with your attorney</li>
        <li>Follow all court deadlines and requirements</li>
        <li>Consider alternative dispute resolution methods when appropriate</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Civil litigation can be complex and time-consuming, but understanding your rights is the first step toward achieving a favorable outcome. Whether you're a plaintiff or defendant, having experienced legal representation is crucial to protecting your interests and ensuring your rights are upheld throughout the process.</p>
      
      <p>If you're facing a civil legal matter, don't hesitate to contact our experienced civil litigation attorneys for a consultation. We're here to help you understand your rights and develop a strong legal strategy.</p>
    `,
    author: 'Adv. Saksham Sharma',
    date: 'March 15, 2024',
    category: 'Civil Law',
    slug: 'understanding-civil-litigation-rights',
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
    tags: ['Civil Law', 'Litigation', 'Legal Rights', 'Court Process']
  },
  'corporate-compliance-guide': {
    title: 'Corporate Compliance: What Every Business Needs to Know',
    content: `
      <p>Corporate compliance has become increasingly important in today's business environment. With evolving regulations and stricter enforcement, businesses must understand their compliance obligations to avoid legal pitfalls and maintain their reputation.</p>
      
      <h2>What is Corporate Compliance?</h2>
      <p>Corporate compliance refers to the process of ensuring that a company and its employees act in accordance with all applicable laws, regulations, standards, and ethical practices. This includes both internal policies and external regulatory requirements.</p>
      
      <h2>Key Areas of Compliance</h2>
      <h3>1. Regulatory Compliance</h3>
      <p>Businesses must comply with various regulations depending on their industry, including:</p>
      <ul>
        <li>Securities regulations for publicly traded companies</li>
        <li>Environmental regulations for manufacturing businesses</li>
        <li>Data protection laws for companies handling personal information</li>
        <li>Employment laws and workplace safety regulations</li>
      </ul>
      
      <h3>2. Financial Compliance</h3>
      <p>Financial compliance involves adhering to accounting standards, tax regulations, and financial reporting requirements. This includes:</p>
      <ul>
        <li>Accurate financial record-keeping</li>
        <li>Timely tax filings</li>
        <li>Proper audit procedures</li>
        <li>Anti-money laundering measures</li>
      </ul>
      
      <h3>3. Operational Compliance</h3>
      <p>This covers day-to-day business operations and includes:</p>
      <ul>
        <li>Health and safety protocols</li>
        <li>Quality control standards</li>
        <li>Customer service requirements</li>
        <li>Supplier and vendor management</li>
      </ul>
      
      <h2>Building a Compliance Program</h2>
      <h3>1. Risk Assessment</h3>
      <p>Identify potential compliance risks specific to your industry and business model. This includes:</p>
      <ul>
        <li>Regulatory risks</li>
        <li>Operational risks</li>
        <li>Financial risks</li>
        <li>Reputational risks</li>
      </ul>
      
      <h3>2. Policy Development</h3>
      <p>Develop comprehensive policies and procedures that address identified risks:</p>
      <ul>
        <li>Code of conduct</li>
        <li>Anti-corruption policies</li>
        <li>Data privacy policies</li>
        <li>Whistleblower policies</li>
      </ul>
      
      <h3>3. Training and Communication</h3>
      <p>Ensure all employees understand their compliance obligations through:</p>
      <ul>
        <li>Regular training sessions</li>
        <li>Clear communication of policies</li>
        <li>Regular updates on regulatory changes</li>
        <li>Accessible compliance resources</li>
      </ul>
      
      <h2>Monitoring and Enforcement</h2>
      <p>Effective compliance programs require ongoing monitoring and enforcement:</p>
      <ul>
        <li>Regular audits and assessments</li>
        <li>Monitoring systems and controls</li>
        <li>Investigation procedures for violations</li>
        <li>Disciplinary measures for non-compliance</li>
      </ul>
      
      <h2>Consequences of Non-Compliance</h2>
      <p>Failure to maintain proper compliance can result in:</p>
      <ul>
        <li>Legal penalties and fines</li>
        <li>Criminal charges</li>
        <li>Loss of business licenses</li>
        <li>Reputational damage</li>
        <li>Civil lawsuits</li>
        <li>Loss of investor confidence</li>
      </ul>
      
      <h2>Best Practices for Compliance</h2>
      <ul>
        <li>Make compliance a top priority at all levels of the organization</li>
        <li>Regularly review and update compliance policies</li>
        <li>Foster a culture of ethical behavior</li>
        <li>Maintain open communication channels for reporting concerns</li>
        <li>Work with experienced compliance professionals and legal counsel</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Corporate compliance is not just about avoiding legal trouble—it's about building a sustainable, ethical business that can thrive in the long term. By implementing comprehensive compliance programs and maintaining a culture of integrity, businesses can protect themselves from legal risks while building trust with stakeholders.</p>
      
      <p>Our corporate law team can help you develop and implement effective compliance programs tailored to your business needs. Contact us today to learn more about how we can help protect your business.</p>
    `,
    author: 'Adv. Priya Verma',
    date: 'March 10, 2024',
    category: 'Corporate Law',
    slug: 'corporate-compliance-guide',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    tags: ['Corporate Law', 'Compliance', 'Business Regulations', 'Risk Management']
  },
  'intellectual-property-digital-age': {
    title: 'Protecting Your Intellectual Property in the Digital Age',
    content: `
      <p>In today's digital landscape, intellectual property (IP) protection has become more crucial than ever. With the rapid advancement of technology and the ease of digital reproduction, creators and businesses must be proactive in protecting their intellectual assets.</p>
      
      <h2>Understanding Intellectual Property</h2>
      <p>Intellectual property encompasses creations of the mind, including:</p>
      <ul>
        <li><strong>Patents:</strong> Inventions and technological innovations</li>
        <li><strong>Trademarks:</strong> Brand names, logos, and distinctive signs</li>
        <li><strong>Copyrights:</strong> Literary, artistic, and creative works</li>
        <li><strong>Trade Secrets:</strong> Confidential business information</li>
      </ul>
      
      <h2>Digital Age Challenges</h2>
      <h3>1. Ease of Reproduction</h3>
      <p>Digital content can be easily copied, distributed, and modified without permission. This makes it challenging to control the use of copyrighted material, especially in online environments.</p>
      
      <h3>2. Global Reach</h3>
      <p>The internet has no geographical boundaries, making it difficult to enforce IP rights across different jurisdictions with varying laws and regulations.</p>
      
      <h3>3. Rapid Technological Changes</h3>
      <p>New technologies emerge constantly, creating new forms of IP and new ways to infringe upon existing rights. This requires continuous adaptation of protection strategies.</p>
      
      <h2>Protection Strategies</h2>
      <h3>1. Registration and Documentation</h3>
      <ul>
        <li>Register trademarks and patents in relevant jurisdictions</li>
        <li>Document creation dates and processes</li>
        <li>Maintain detailed records of IP development</li>
        <li>Use copyright notices and trademark symbols</li>
      </ul>
      
      <h3>2. Digital Rights Management (DRM)</h3>
      <p>Implement technical measures to control access and use of digital content:</p>
      <ul>
        <li>Encryption and watermarking</li>
        <li>Access control systems</li>
        <li>Usage monitoring tools</li>
        <li>Anti-copying technologies</li>
      </ul>
      
      <h3>3. Legal Agreements</h3>
      <p>Use comprehensive legal agreements to protect IP rights:</p>
      <ul>
        <li>Non-disclosure agreements (NDAs)</li>
        <li>Employment agreements with IP clauses</li>
        <li>Licensing agreements</li>
        <li>Terms of service and privacy policies</li>
      </ul>
      
      <h2>Online IP Protection</h2>
      <h3>1. Website Protection</h3>
      <ul>
        <li>Register domain names proactively</li>
        <li>Use terms of service to protect content</li>
        <li>Implement anti-scraping measures</li>
        <li>Monitor for unauthorized use of content</li>
      </ul>
      
      <h3>2. Social Media Protection</h3>
      <ul>
        <li>Secure social media handles and profiles</li>
        <li>Monitor for trademark infringement</li>
        <li>Use platform-specific reporting tools</li>
        <li>Maintain consistent brand presence</li>
      </ul>
      
      <h3>3. E-commerce Protection</h3>
      <ul>
        <li>Monitor online marketplaces for counterfeits</li>
        <li>Use brand protection services</li>
        <li>Implement authentication measures</li>
        <li>Work with platforms to remove infringing content</li>
      </ul>
      
      <h2>Enforcement Measures</h2>
      <h3>1. Monitoring and Detection</h3>
      <p>Implement systems to detect IP infringement:</p>
      <ul>
        <li>Use IP monitoring services</li>
        <li>Set up Google alerts for brand names</li>
        <li>Regularly search for unauthorized use</li>
        <li>Monitor competitor activities</li>
      </ul>
      
      <h3>2. Cease and Desist Letters</h3>
      <p>Often the first step in IP enforcement, these letters can be effective in stopping infringement without costly litigation.</p>
      
      <h3>3. DMCA Takedown Notices</h3>
      <p>For copyright infringement online, the Digital Millennium Copyright Act (DMCA) provides a mechanism for requesting removal of infringing content.</p>
      
      <h3>4. Legal Action</h3>
      <p>When other measures fail, litigation may be necessary to protect IP rights and seek damages.</p>
      
      <h2>International Considerations</h2>
      <p>IP protection often requires international strategies:</p>
      <ul>
        <li>File for protection in key markets</li>
        <li>Understand local IP laws and customs</li>
        <li>Work with local legal counsel</li>
        <li>Consider international treaties and agreements</li>
      </ul>
      
      <h2>Emerging Technologies</h2>
      <h3>1. Artificial Intelligence</h3>
      <p>AI creates new IP challenges, including questions about AI-generated content ownership and patent eligibility for AI inventions.</p>
      
      <h3>2. Blockchain and NFTs</h3>
      <p>Blockchain technology offers new ways to prove ownership and authenticity, while NFTs create new forms of digital assets.</p>
      
      <h3>3. 3D Printing</h3>
      <p>3D printing technology raises questions about patent infringement and the protection of product designs.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Develop a comprehensive IP strategy</li>
        <li>Educate employees about IP protection</li>
        <li>Regularly review and update IP portfolios</li>
        <li>Work with experienced IP attorneys</li>
        <li>Stay informed about technological and legal developments</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Protecting intellectual property in the digital age requires a multi-faceted approach combining legal protection, technological solutions, and proactive monitoring. As technology continues to evolve, so must IP protection strategies.</p>
      
      <p>Our intellectual property team can help you develop and implement comprehensive IP protection strategies tailored to your specific needs. Contact us today to learn more about protecting your valuable intellectual assets.</p>
    `,
    author: 'Adv. Rajesh Kumar',
    date: 'March 5, 2024',
    category: 'IPR Law',
    slug: 'intellectual-property-digital-age',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    tags: ['Intellectual Property', 'Digital Rights', 'Technology Law', 'IP Protection']
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found - Saksham & Associates',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} - Saksham & Associates`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    keywords: post.tags.join(', '),
  };
}
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          {/* Header */}
          <header className="mb-8">
            <div className="mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Share2 className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">Share this article</span>
            </div>
          </header>
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            style={{
              lineHeight: '1.8',
              color: '#374151'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Author Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">About the Author</h3>
            <p className="text-gray-600">
              {post.author} is an experienced attorney at Saksham & Associates specializing in {post.category.toLowerCase()}. 
              With years of experience in legal practice, they provide expert insights and guidance on complex legal matters.
            </p>
          </div>
          
          {/* CTA */}
          <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
            <p className="text-blue-100 mb-6">
              Our experienced attorneys are here to help you with your legal matters. 
              Contact us today for a consultation.
            </p>
            <Link 
              href="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-block"
            >
              Get Legal Help
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}