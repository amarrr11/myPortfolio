import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  category: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    { name: 'React', category: 'Technical' },
    { name: 'Node.js', category: 'Technical' },
    { name: 'Express.js', category: 'Technical' },
    { name: 'Vite', category: 'Technical' },
    { name: 'Selenium', category: 'Technical' },
    { name: 'Power BI', category: 'Technical' },
    { name: 'Responsive Design', category: 'Technical' },
    { name: 'RESTful APIs', category: 'Technical' },
    { name: 'Postman', category: 'Technical' },
    { name: 'Problem Solving', category: 'Soft Skills' },
    { name: 'Critical Thinking', category: 'Soft Skills' },
    { name: 'Teamwork & Collaboration', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' }
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        darkMode ? 'bg-[#0a192f] text-white' : 'bg-gray-50 text-[#0a192f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">
          Skills
          <div className="h-1 w-16 bg-[#64ffda] mt-2"></div>
        </h2>
        
        <div className="mt-12">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                      darkMode ? 'bg-[#112240]' : 'bg-white shadow-sm'
                    }`}
                  >
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;