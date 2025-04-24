import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'ML Model Optimizer',
      description: 'Comprehensive comparison of classification algorithms (KNN, Naïve Bayes) on credit card dataset. Includes detailed analysis of accuracy, precision, and recall metrics.',
      image: 'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg',
      tech: ['R', 'Machine Learning', 'Data Science'],
      githubLink: 'https://github.com/amarrr11/Predicting_accuracy-CreditCardDataset',
      featured: true
    },
    {
      id: 2,
      title: 'QR Code Studio',
      description: 'Advanced QR code generator with multiple format support (PNG, JPG, SVG, PDF). Features custom styling options and efficient Canvas implementation for high-quality output.',
      image: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg',
      tech: ['JavaScript', 'Canvas API', 'HTML/CSS'],
      githubLink: 'https://github.com/amarrr11/QR-code-generator',
      featured: true
    },
    {
      id: 3,
      title: 'GlobalPay Converter',
      description: 'Feature-rich currency converter with real-time exchange rates. Includes support for multiple currencies and historical rate tracking.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      tech: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/amarrr11/Currency-Convertor',
      featured: false
    },
    {
      id: 4,
      title: 'Sudoku Solver',
      description: 'Console-based tool that efficiently solves Sudoku puzzles using backtracking algorithm. Demonstrates strong problem-solving skills and understanding of recursion.',
      image: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg',
      tech: ['C++', 'Algorithms', 'Problem Solving'],
      featured: true
    },
    {
      id: 5,
      title: 'Road Accident Visualizer',
      description: 'Interactive data visualization project analyzing road accident data through charts and maps. Utilizes PowerBI filters and slicers for generating user-specific insights.',
      image: 'https://images.pexels.com/photos/7691714/pexels-photo-7691714.jpeg',
      tech: ['PowerBI', 'Data Analysis', 'Visualization'],
      featured: true
    },
    {
      id: 6,
      title: 'Live Cricket Notifier',
      description: 'Real-time cricket match notification system that fetches live data and triggers alerts for user-defined events. Showcases backend development skills.',
      image: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg',
      tech: ['Node.js', 'APIs', 'Real-time Updates'],
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.featured);

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-[#112240] text-white' : 'bg-white text-[#0a192f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">
          Projects
          <div className="h-1 w-16 bg-[#64ffda] mt-2"></div>
        </h2>
        
        <div className="mt-8 flex justify-center sm:justify-start space-x-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#64ffda] text-[#0a192f] font-medium'
                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#0a192f]'} hover:bg-gray-100/10`
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-6 py-2 rounded-md transition-colors ${
              activeFilter === 'featured'
                ? 'bg-[#64ffda] text-[#0a192f] font-medium'
                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#0a192f]'} hover:bg-gray-100/10`
            }`}
          >
            Featured
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-8px] ${
                darkMode ? 'bg-[#0a192f] hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]' : 'bg-gray-50 hover:shadow-lg'
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0a192f]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#64ffda] text-[#0a192f] hover:bg-opacity-80 transition-all"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#64ffda] text-[#0a192f] hover:bg-opacity-80 transition-all"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-[#112240] text-[#64ffda]' : 'bg-gray-200 text-[#0a192f]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;