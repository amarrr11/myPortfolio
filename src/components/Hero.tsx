import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriterElement = typewriterRef.current;
    if (!typewriterElement) return;

    const roles = ['Student', 'Developer', 'Tech Enthusiast', 'Problem Solver'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typewriterElement.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 150;
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before starting new word
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative ${
        darkMode ? 'bg-[#0a192f] text-white' : 'bg-gray-50 text-[#0a192f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#64ffda] font-medium mb-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Amarnath Tripathy
            </h1>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 opacity-0 animate-fadeIn ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              I'm a <span ref={typewriterRef} className="text-[#64ffda]"></span>
              <span className="animate-blink">|</span>
            </h2>
            <p className={`max-w-2xl mx-auto lg:mx-0 text-lg mb-8 opacity-0 animate-fadeIn ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`} style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              B.Tech CSE student at Lovely Professional University, passionate about creating exceptional digital experiences with a strong foundation in computer science.
            </p>
            <div className="space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <a 
                href="#projects" 
                className="inline-block bg-[#64ffda] text-[#0a192f] font-medium h-12 px-8 rounded hover:bg-opacity-80 transition-all duration-300 leading-[48px]"
              >
                View Projects
              </a>
              <a 
                href="https://docs.google.com/document/d/1BEKA_laYYQYQJXoymL2Vc7y9IxGwVtfAnMYGTQAHS18/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block border-2 border-[#64ffda] text-[#64ffda] font-medium h-12 px-8 rounded hover:bg-[#64ffda]/10 transition-all duration-300 leading-[44px]"
              >
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button 
          onClick={scrollToAbout} 
          aria-label="Scroll to About section"
          className={darkMode ? 'text-white' : 'text-[#0a192f]'}
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero