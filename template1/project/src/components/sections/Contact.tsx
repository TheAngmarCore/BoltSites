import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contact@designstudio.com',
      link: 'mailto:contact@designstudio.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Address',
      value: 'San Francisco, CA, USA',
      link: 'https://maps.google.com'
    }
  ];
  
  return (
    <Section 
      id="contact" 
      title="Get in Touch" 
      subtitle="Have a project in mind? Let's discuss how I can help you achieve your goals"
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:scale-105 transition-all duration-300"
                target={info.label === 'Address' ? '_blank' : undefined}
                rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-8 text-white hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-blue-100 dark:text-blue-200 mb-8">
            Connect with me on social media for updates on my latest work and design insights.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="ghost" 
              className="bg-white/10 hover:bg-white/20 text-white w-full justify-center py-4"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              Twitter
            </Button>
            <Button 
              variant="ghost" 
              className="bg-white/10 hover:bg-white/20 text-white w-full justify-center py-4"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              className="bg-white/10 hover:bg-white/20 text-white w-full justify-center py-4"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              GitHub
            </Button>
            <Button 
              variant="ghost" 
              className="bg-white/10 hover:bg-white/20 text-white w-full justify-center py-4"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;