import React from 'react';
import { FileText, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-start to-primary-end mb-4 md:mb-0">
            Tender
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="mailto:hi@tender.ai" 
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tender AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;