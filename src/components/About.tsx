
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Get to know me better</h2>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Muhammed Saad Khan
          </h3>
          <h4 className="text-xl font-bold mb-4">
            Student & Aspiring Front-end Developer with a passion for creating exceptional digital experiences
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate student eager to start my journey in web development and design. Although I'm currently at the beginning of my career with no professional experience yet, I'm committed to learning and developing my skills in creating beautiful, functional, and user-friendly websites and applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My approach focuses on combining technical learning with creative problem-solving. I believe that the best digital products are born from a deep understanding of user needs, meticulous attention to detail, and thoughtful design decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <div className="glass dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3 flex-1">
              <Calendar className="text-primary" size={20} />
              <div>
                <h3 className="font-medium">Experience</h3>
                <p className="text-sm text-muted-foreground">Student</p>
              </div>
            </div>
            
            <div className="glass dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3 flex-1">
              <MapPin className="text-primary" size={20} />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>
            
            <div className="glass dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3 flex-1">
              <Briefcase className="text-primary" size={20} />
              <div>
                <h3 className="font-medium">Projects</h3>
                <p className="text-sm text-muted-foreground">Learning Projects</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 text-center">
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
