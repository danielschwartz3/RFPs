import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      // Focus the input if possible
      const input = form.querySelector('input[type="email"]');
      if (input) input.focus();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0072E6] to-[#0047C1]">
            Tender
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <button 
            onClick={scrollToSignup}
            className="px-4 py-2 bg-[#0B1220] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get early access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;