import React from 'react';
import { Palette, Code, Smartphone, MonitorSmartphone, Briefcase, Megaphone } from 'lucide-react';
import Section from '../ui/Section';
import { Service } from '../../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces that enhance user experience and engagement.',
      icon: 'Palette'
    },
    {
      id: '2',
      title: 'Web Development',
      description: 'Building responsive, fast, and modern websites using the latest technologies and best practices.',
      icon: 'Code'
    },
    {
      id: '3',
      title: 'Mobile App Design',
      description: 'Designing user-friendly mobile applications with a focus on usability and aesthetics.',
      icon: 'Smartphone'
    },
    {
      id: '4',
      title: 'Brand Identity',
      description: 'Developing unique and memorable brand identities that help businesses stand out in their market.',
      icon: 'Briefcase'
    },
    {
      id: '5',
      title: 'Responsive Design',
      description: 'Creating websites that provide optimal viewing experience across a wide range of devices.',
      icon: 'MonitorSmartphone'
    },
    {
      id: '6',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to help businesses grow their online presence and reach.',
      icon: 'Megaphone'
    }
  ];
  
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette size={36} />;
      case 'Code':
        return <Code size={36} />;
      case 'Smartphone':
        return <Smartphone size={36} />;
      case 'Briefcase':
        return <Briefcase size={36} />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone size={36} />;
      case 'Megaphone':
        return <Megaphone size={36} />;
      default:
        return <Palette size={36} />;
    }
  };
  
  return (
    <Section 
      id="services" 
      title="My Services" 
      subtitle="I offer a range of services to help businesses succeed in the digital landscape"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group hover:border-blue-500 hover:border-opacity-50 border-2 border-transparent"
          >
            <div className="mb-6 text-blue-600 dark:text-blue-400 transform transition-transform duration-300 group-hover:scale-110">
              {getServiceIcon(service.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's work together on your next project</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6">
              I'm currently available for freelance work. If you have a project that you want to get started or need help with, feel free to contact me.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;