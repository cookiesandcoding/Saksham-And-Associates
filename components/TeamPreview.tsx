import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';

const TeamPreview = () => {
  const teamMembers = [
    {
      name: 'Saksham ',
      position: 'Senior Partner',
      specialization: 'Civil & Criminal Law',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'saksham@sakshamassociates.com',
      phone: '+91 98765 43210'
    },
    {
      name: 'Vidhi jain ',
      position: 'Partner',
      specialization: 'Corporate & Family Law',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'priya@sakshamassociates.com',
      phone: '+91 98765 43211'
    },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our experienced attorneys are dedicated to providing exceptional legal services 
            and achieving the best outcomes for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.specialization}</p>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                  <Phone className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                  <Linkedin className="h-5 w-5 text-gray-500 hover:text-blue-800 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/team" 
            className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 inline-block"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;