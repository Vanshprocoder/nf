
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    // { name: 'Trainers', href: '#trainers' },
    { name: 'Memberships', href: '#pricing' },
    { name: 'BMI Calc', href: '#bmi' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center">
          Nagpal<span className="text-neon">Fitness</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest hover:text-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-neon text-zinc-950 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-lime-300 transition-all transform hover:scale-105"
          >
            Book Free Demo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-bold uppercase tracking-widest text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-neon text-zinc-950 px-6 py-4 rounded-lg text-lg font-bold uppercase tracking-wider text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
