
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-10 transition-all duration-300 ease-apple-ease',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md dark:bg-gray-900/80' 
          : 'bg-transparent dark:bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight"
          onClick={closeMenu}
        >
          Muhammed Saad Khan
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
          
          <ThemeToggle />
          
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get In Touch
          </a>
        </div>
        
        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="flex items-center p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col pt-20 px-6 transform transition-transform duration-300 ease-apple-ease md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <a 
                href={item.href} 
                className="text-lg font-medium block py-2 text-center hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="w-full pt-4">
            <a 
              href="#contact" 
              className="btn btn-primary w-full flex justify-center items-center"
              onClick={closeMenu}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
