
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 px-6 border-t border-border relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold tracking-tight">Portfolio</a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating digital experiences with precision, passion, and attention to detail.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-sm">
              Crafted with <span className="text-primary">❤</span> by <span className="font-medium">Your Name</span>
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 p-2 rounded-full bg-primary text-white shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
