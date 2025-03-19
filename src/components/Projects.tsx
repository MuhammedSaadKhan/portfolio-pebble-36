
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'ui', label: 'UI/UX Design' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with advanced filtering, search, and checkout features.',
      image: '/placeholder.svg',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      description: 'An interactive dashboard for tracking expenses, investments, and financial goals.',
      image: '/placeholder.svg',
      category: 'ui',
      tags: ['Figma', 'React', 'Chart.js'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity app that helps users organize and prioritize their daily tasks.',
      image: '/placeholder.svg',
      category: 'mobile',
      tags: ['React Native', 'Firebase'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing creative projects and professional skills.',
      image: '/placeholder.svg',
      category: 'web',
      tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing social media accounts and analytics.',
      image: '/placeholder.svg',
      category: 'ui',
      tags: ['Figma', 'Adobe XD'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 6,
      title: 'Health & Fitness App',
      description: 'A mobile application for tracking workouts, nutrition, and health metrics.',
      image: '/placeholder.svg',
      category: 'mobile',
      tags: ['Flutter', 'Firebase'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Recent Projects</h2>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="glass p-1.5 rounded-lg flex">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'hover:bg-white/50'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden hover-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl} 
                    className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="text-primary" />
                  </a>
                  <a 
                    href={project.repoUrl} 
                    className="p-3 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="text-primary" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.liveUrl} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  View Project <Eye size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
