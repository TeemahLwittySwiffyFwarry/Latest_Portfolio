// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Dashboard = ({ darkMode }) => {
  const [nameText, setNameText] = useState("");
  const [stackText, setStackText] = useState("");

  const nameDisplay = "Name: Oluwayemisi Oladosu";
  const stackDisplay = "Stack: Full Stack Web Developer (ReactJs and Django)";

  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      setNameText(nameDisplay.slice(0, nameIndex + 1));
      nameIndex++;
      if (nameIndex === nameDisplay.length) clearInterval(nameInterval);
    }, 100);

    const stackTimeout = setTimeout(() => {
      let stackIndex = 0;
      const stackInterval = setInterval(() => {
        setStackText(stackDisplay.slice(0, stackIndex + 1));
        stackIndex++;
        if (stackIndex === stackDisplay.length) clearInterval(stackInterval);
      }, 100);
    }, nameDisplay.length * 100);

    return () => {
      clearInterval(nameInterval);
      clearTimeout(stackTimeout);
    };
  }, []);

  return (
    <div className={`p-4 h-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-black'}`}>
      <motion.h1 
        className="text-2xl font-bold mb-4 text-center" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to Oluwayemisi Oladosu's Portfolio
      </motion.h1>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg mb-4"
      >
        <img 
          src="./banner.png"
          alt="Banner" 
          className="object-cover w-full h-96" 
        />
        
      </motion.div> */}

      <div className={`text-center rounded-md p-2 ${darkMode ? 'bg-purple-800': 'bg-purple-200'}`}>
        <p className="mt-2">
          I am passionate about using technology to solve real-world problems and make life easier for others. 
          My goal is to continuously learn and grow as a developer while contributing to meaningful projects that 
          make a positive impact on society.
        </p>
        
        <div className="p-4 text-center">
          <motion.h1
            className="text-2xl font-bold"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {nameText}
          </motion.h1>
          <motion.h2
            className="text-xl font-semibold mt-2"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stackText}
          </motion.h2>
        </div>
        
      </div>
      <h1 className='text-center mt-4 p-4'>This site is a work in Project. However, the project section is ready for your view.</h1>
    </div>
  );
};

export default Dashboard;