import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-gray-100 text-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <a href="#home" className="font-bold text-2xl">
              Amarnath<span className="text-[#64ffda]">.</span>
            </a>
            <div className="h-6 w-px mx-4 bg-gray-500 hidden md:block"></div>
            <p>B.Tech CSE Student | Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-[#64ffda] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center text-sm">
            <span>© {new Date().getFullYear()} Amarnath Tripathy. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;