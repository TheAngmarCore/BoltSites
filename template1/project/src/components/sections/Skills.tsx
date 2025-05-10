import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, MonitorSmartphone, Code, Palette, PenTool, Lightbulb } from 'lucide-react';
import Section from '../ui/Section';
import { Skill } from '../../types';

const Skills: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const designSkills: Skill[] = [
    { name: 'UI Design', proficiency: 95, icon: 'Palette' },
    { name: 'UX Research', proficiency: 85, icon: 'Users' },
    { name: 'Wireframing', proficiency: 90, icon: 'PenTool' },
    { name: 'Interaction Design', proficiency: 88, icon: 'MousePointer' },
  ];
  
  const developmentSkills: Skill[] = [
    { name: 'HTML/CSS', proficiency: 95, icon: 'Code' },
    { name: 'JavaScript', proficiency: 90, icon: 'FileCode' },
    { name: 'React', proficiency: 85, icon: 'Layers' },
    { name: 'Responsive Design', proficiency: 92, icon: 'Smartphone' },
  ];
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette />;
      case 'Code': return <Code />;
      case 'PenTool': return <PenTool />;
      case 'Smartphone': return <Smartphone />;
      case 'Lightbulb': return <Lightbulb />;
      default: return <Lightbulb />;
    }
  };
  
  const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="mr-3 text-blue-500 dark:text-blue-400">
              {getIcon(skill.icon)}
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {skill.proficiency}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isInView ? `${skill.proficiency}%` : '0%',
              transitionDelay: `${delay * 100}ms`
            }}
          />
        </div>
      </div>
    );
  };
  
  return (
    <div ref={sectionRef}>
      <Section 
        id="skills" 
        title="My Skills" 
        subtitle="I specialize in combining beautiful design with clean, efficient code"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8 inline-flex items-center rounded-lg bg-blue-100 dark:bg-blue-900/30 px-4 py-2">
              <Palette className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Design Skills</h3>
            </div>
            
            <div>
              {designSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-8 inline-flex items-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2">
              <Code className="mr-2 text-emerald-600 dark:text-emerald-400" size={20} />
              <h3 className="font-semibold text-emerald-600 dark:text-emerald-400">Development Skills</h3>
            </div>
            
            <div>
              {developmentSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index + 4} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Palette className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">UI Design</h4>
            <p className="text-gray-600 dark:text-gray-300">Creating intuitive interfaces with a focus on aesthetics and usability.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <PenTool className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Brand Identity</h4>
            <p className="text-gray-600 dark:text-gray-300">Crafting distinctive and cohesive visual identities for brands.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Lightbulb className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">UX Research</h4>
            <p className="text-gray-600 dark:text-gray-300">Understanding user needs to inform design decisions and solutions.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Code className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Frontend Dev</h4>
            <p className="text-gray-600 dark:text-gray-300">Building responsive, interactive interfaces with modern frameworks.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Smartphone className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Responsive Design</h4>
            <p className="text-gray-600 dark:text-gray-300">Ensuring optimal viewing experience across all devices and screen sizes.</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MonitorSmartphone className="mb-4 text-blue-500 dark:text-blue-400" size={28} />
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Cross-Platform</h4>
            <p className="text-gray-600 dark:text-gray-300">Creating solutions that work seamlessly across different platforms.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;