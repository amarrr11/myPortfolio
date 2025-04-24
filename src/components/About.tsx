import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${
        darkMode ? 'bg-[#112240] text-white' : 'bg-[#0a192f] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">
          About Me
          <div className="h-1 w-16 bg-[#64ffda] mt-2"></div>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6 text-gray-300">
              Hello! I'm Amarnath, a B.Tech Computer Science Engineering student at Lovely Professional University with a passion for creating things that live on the internet. My interest in technology started back when I was in high school, and it has only grown stronger since then.
            </p>
            
            <p className="text-lg mb-6 text-gray-300">
              During my academic journey, I've focused on developing a strong foundation in core CS concepts while also staying current with modern web technologies. I enjoy solving complex problems and turning ideas into elegant, functional applications.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-[#0a192f]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-lg font-medium">Lovely Professional University, Jalandhar</h4>
                      <p className="text-[#64ffda]">B.Tech - Computer Science and Engineering</p>
                      <p className="text-gray-300">CGPA - 7.99</p>
                    </div>
                    <p className="text-gray-400 mt-2 md:mt-0">2022 - 2026</p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-[#0a192f]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-lg font-medium">DAV Public School</h4>
                      <p className="text-[#64ffda]">Intermediate</p>
                      <p className="text-gray-300">Percentage - 81.8%</p>
                    </div>
                    <p className="text-gray-400">2021</p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-[#0a192f]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-lg font-medium">Koncept Public School</h4>
                      <p className="text-[#64ffda]">Matriculation</p>
                      <p className="text-gray-300">Percentage - 95%</p>
                    </div>
                    <p className="text-gray-400">2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Coding Profiles</h3>
              <div className="space-y-4">
                <a 
                  href="https://leetcode.com/u/amarnathtripathy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#0a192f] hover:bg-[#0a192f]/80 transition-colors"
                >
                  <h4 className="text-[#64ffda] font-medium">LeetCode</h4>
                  <p className="text-sm text-gray-300 mt-1">Problem Solving & DSA Practice</p>
                </a>
                
                <a 
                  href="https://www.naukri.com/code360/profile/amarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#0a192f] hover:bg-[#0a192f]/80 transition-colors"
                >
                  <h4 className="text-[#64ffda] font-medium">Coding Ninjas</h4>
                  <p className="text-sm text-gray-300 mt-1">Competitive Programming</p>
                </a>
                
                <a 
                  href="https://www.geeksforgeeks.org/user/amarnath_tripathy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#0a192f] hover:bg-[#0a192f]/80 transition-colors"
                >
                  <h4 className="text-[#64ffda] font-medium">GeeksForGeeks</h4>
                  <p className="text-sm text-gray-300 mt-1">DSA & Interview Preparation</p>
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  'Web Development', 
                  'Competitive Programming',
                  'Open Source', 
                  'UI/UX Design',
                  'Machine Learning', 
                  'Cloud Computing'
                ].map((interest, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="h-2 w-2 bg-[#64ffda] rounded-full mr-2"></span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;