
import React, { useEffect, useRef } from 'react';
import { Code, Layout, Server, Database, Palette, LineChart } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation classes to progress bars when in view
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.progress || '0%';
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: [
        { name: 'HTML & CSS', progress: '95%' },
        { name: 'JavaScript', progress: '90%' },
        { name: 'React', progress: '85%' },
        { name: 'TypeScript', progress: '80%' },
      ]
    },
    {
      icon: <Layout size={24} />,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', progress: '90%' },
        { name: 'Responsive Design', progress: '95%' },
        { name: 'Prototyping', progress: '85%' },
        { name: 'User Research', progress: '75%' },
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', progress: '80%' },
        { name: 'Express', progress: '80%' },
        { name: 'REST APIs', progress: '85%' },
        { name: 'Authentication', progress: '75%' },
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      skills: [
        { name: 'MongoDB', progress: '85%' },
        { name: 'Firebase', progress: '80%' },
        { name: 'SQL', progress: '70%' },
        { name: 'Data Modeling', progress: '75%' },
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      skills: [
        { name: 'Tailwind CSS', progress: '90%' },
        { name: 'Styled Components', progress: '85%' },
        { name: 'SCSS', progress: '80%' },
        { name: 'Animation', progress: '75%' },
      ]
    },
    {
      icon: <LineChart size={24} />,
      title: 'Other',
      skills: [
        { name: 'Git & GitHub', progress: '90%' },
        { name: 'Testing', progress: '75%' },
        { name: 'Performance Optimization', progress: '80%' },
        { name: 'CI/CD', progress: '70%' },
      ]
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">My Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass rounded-xl p-6 hover-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 text-primary rounded-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.progress}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress w-0 transition-all duration-1000 ease-out" 
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
