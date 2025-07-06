import React from 'react';
import Link from 'next/link';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Saksham & Associates</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing exceptional legal services with integrity, excellence, and dedication to justice.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-blue-200 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-200 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/practicing-areas" className="text-blue-200 hover:text-yellow-400 transition-colors">Practice Areas</Link></li>
              <li><Link href="/team" className="text-blue-200 hover:text-yellow-400 transition-colors">Our Team</Link></li>
              <li><Link href="/blog" className="text-blue-200 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li><span className="text-blue-200">Civil Law</span></li>
              <li><span className="text-blue-200">Criminal Law</span></li>
              <li><span className="text-blue-200">Corporate Law</span></li>
              <li><span className="text-blue-200">Family Law</span></li>
              <li><span className="text-blue-200">Intellectual Property</span></li>
              <li><span className="text-blue-200">Cyber Law</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">123 Legal Street, Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">info@sakshamassociates.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Saksham & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;