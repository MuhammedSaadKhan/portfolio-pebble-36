
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Get to know me better</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div 
              className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-tr from-primary/5 to-primary/20 p-1"
            >
              <div className="glass p-4 rounded-lg h-full flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-blue-300/40 flex items-center justify-center">
                    <span className="text-lg font-medium">Your Photo Here</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="glass p-4 rounded-lg flex items-center space-x-3 flex-1">
                <Calendar className="text-primary" size={20} />
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-muted-foreground">5+ Years</p>
                </div>
              </div>
              
              <div className="glass p-4 rounded-lg flex items-center space-x-3 flex-1">
                <MapPin className="text-primary" size={20} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">New York, USA</p>
                </div>
              </div>
              
              <div className="glass p-4 rounded-lg flex items-center space-x-3 flex-1">
                <Briefcase className="text-primary" size={20} />
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-sm text-muted-foreground">30+ Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Front-end Developer & UI/UX Designer with a passion for creating exceptional digital experiences
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate web developer and designer with over 5 years of experience creating beautiful, functional, and user-friendly websites and applications. I focus on writing clean, elegant and efficient code while designing intuitive user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative problem-solving. I believe that the best digital products are born from a deep understanding of user needs, meticulous attention to detail, and thoughtful design decisions.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
