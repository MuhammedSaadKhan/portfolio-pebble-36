
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="section-subtitle animate-fade-in opacity-0 [animation-delay:200ms]">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in opacity-0 [animation-delay:400ms]">
            <span>I'm a</span> <span className="text-primary">Developer</span>
            <br />
            <span>Creating digital experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in opacity-0 [animation-delay:600ms]">
            I specialize in crafting beautiful user interfaces and intuitive digital experiences 
            with meticulous attention to detail and a passion for design excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 [animation-delay:800ms]">
            <a href="#projects" className="btn btn-primary group">
              View My Work
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-apple-ease group-hover:w-full"></span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm animate-fade-in opacity-0 [animation-delay:1000ms]"
      >
        <span className="mb-2 text-muted-foreground">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
