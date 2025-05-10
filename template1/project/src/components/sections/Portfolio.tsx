import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Project } from '../../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.',
      tags: ['Branding', 'Logo Design', 'Identity'],
      demoUrl: '#'
    },
    {
      id: '2',
      title: 'E-commerce Website',
      category: 'web',
      description: 'Fully responsive e-commerce website with custom product pages, shopping cart, and checkout process.',
      tags: ['Web Design', 'Frontend', 'E-commerce'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: '3',
      title: 'Mobile App UI Design',
      category: 'ui',
      description: 'User interface design for a fitness tracking mobile application with a focus on usability and visual appeal.',
      tags: ['UI Design', 'Mobile', 'Fitness App'],
      demoUrl: '#'
    },
    {
      id: '4',
      title: 'Interactive Dashboard',
      category: 'web',
      description: 'Data visualization dashboard for monitoring business metrics with interactive charts and filters.',
      tags: ['Web App', 'Dashboard', 'Data Viz'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: '5',
      title: 'Product Packaging',
      category: 'design',
      description: 'Product packaging design for a premium cosmetics brand emphasizing elegance and sustainability.',
      tags: ['Packaging', 'Print', 'Branding'],
      demoUrl: '#'
    },
    {
      id: '6',
      title: 'Restaurant Website',
      category: 'web',
      description: 'Modern website for a high-end restaurant featuring online reservations, menu display, and location information.',
      tags: ['Web Design', 'Restaurant', 'UI/UX'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];
  
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Design', value: 'design' },
    { label: 'UI', value: 'ui' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <Section 
      id="portfolio" 
      title="My Portfolio" 
      subtitle="Explore a selection of my recent projects and creative work"
      className="bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-lift ${
              activeFilter === filter.value
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div 
            key={project.id}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 hover-card"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setActiveProject(project)}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </button>
                
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="hover-lift">
          View All Projects
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
      
      {/* Project Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h2>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {activeProject.demoUrl && (
                  <Button>
                    Live Demo
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                )}
                
                {activeProject.githubUrl && (
                  <Button variant="outline">
                    View Code
                    <Github size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Portfolio;