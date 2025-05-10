import React from 'react';
import { Users, Map, Briefcase, Award } from 'lucide-react';
import Section from '../ui/Section';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Projects Completed', value: '150+', icon: <Award className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '85+', icon: <Users className="w-6 h-6" /> },
    { label: 'Countries', value: '12', icon: <Map className="w-6 h-6" /> },
  ];
  
  return (
    <Section id="about" className="bg-white dark:bg-gray-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-[1.01]">
            <img 
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" 
              alt="Professional designer working" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold">Alex Morgan</h3>
                <p className="text-white/80">UX/UI Designer & Developer</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-blue-600 dark:bg-blue-500 p-6 rounded-xl text-white hidden md:block">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-sm font-medium">Years of Experience</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate designer and developer with a focus on creating beautiful, functional, and user-centered digital experiences. With over 8 years of experience in the industry, I've helped businesses of all sizes establish their brand presence and achieve their goals through thoughtful design and strategic thinking.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            My approach combines aesthetic sensibility with technical expertise, allowing me to craft solutions that not only look good but also perform exceptionally. I believe that great design is about solving problems and creating meaningful connections with users.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center"
              >
                <div className="mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;