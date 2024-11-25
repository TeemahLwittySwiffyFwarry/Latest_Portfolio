// src/Pages/Skills.js
import React from 'react';
import ReviewPopup from '../Components/ReviewPopup';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaCss3Alt, FaHtml5, FaDatabase, FaGithub, FaJsSquare } from 'react-icons/fa';
import { SiDjango, SiBootstrap, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact color="#61DAFB" />, description: 'Advanced in building interactive UI', proficiency: '85%' },
  { name: 'Python', icon: <FaPython color="#3776AB" />, description: 'Proficient with Django & Flask', proficiency: '70%' },
  { name: 'Django', icon: <SiDjango color="#092E20" />, description: 'Full-stack web development', proficiency: '70%' },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, description: 'Semantic and accessible markup', proficiency: '95%' },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, description: 'Responsive design with Tailwind CSS', proficiency: '90%' },
  { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" />, description: 'ES6+ JavaScript, including async/await', proficiency: '80%' },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" />, description: 'Fast and responsive styling', proficiency: '85%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" />, description: 'Utility-first CSS framework', proficiency: '87%' },
  { name: 'Databases', icon: <FaDatabase color="#4DB33D" />, description: 'Experience with SQL and NoSQL databases', proficiency: '75%' },
  { name: 'GitHub', icon: <FaGithub color="#333" />, description: 'Version control and collaboration', proficiency: '90%' },
];

const Skills = ({ darkMode }) => {
  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
      <ReviewPopup
          message="Check out my latest reviews!" 
          showDuration={5000}
          hideDuration={30000}
          darkMode={darkMode}
         
        />
       <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-l-4 border-purple-500  ${
              darkMode ? 'bg-gray-500 text-white' : 'bg-white text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-sm text-center">{skill.description}</p>
            <div className="w-full mt-2">
              <div className="bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: skill.proficiency }}></div>
              </div>
              <p className="text-center text-xs mt-1">{skill.proficiency} proficiency</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
  Beginner (0–50%), Intermediate (50–80%), Advanced (80%+)
</p>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
