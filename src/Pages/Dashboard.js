// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

const Dashboard = ({ darkMode }) => {
  const [nameText, setNameText] = useState("");
  const [stackText, setStackText] = useState("");
  const [showMore, setShowMore] = useState(false); // State to toggle "See more"

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
    <div className={`p-4 h-full ${darkMode ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-300' : 'bg-gradient-to-br from-blue-100 to-white text-black'}`}>
      <motion.h1 
        className="text-3xl font-extrabold mb-6 text-center tracking-wide" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to Oluwayemisi Oladosu's Portfolio
      </motion.h1>

      <div className={`text-center rounded-md p-6 shadow-lg transition-all ${darkMode ? 'bg-purple-800 text-gray-200' : 'bg-purple-200 text-purple-800'}`}>
        <div className="flex justify-center items-center mb-4">
          <BsPersonCircle size={40} className="mr-2" />
          <p className="text-lg font-semibold">About Me</p>
        </div>

        <p className="leading-relaxed text-justify">
          I am passionate about using technology to solve real-world problems and make life easier for others. 
          My goal is to continuously learn and grow as a developer while contributing to meaningful projects that 
          make a positive impact on society.
        </p>

        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <p className="leading-relaxed text-justify">
              I have a strong foundation in both frontend and backend development, with expertise in JavaScript, React,
              and Django. I enjoy building intuitive and responsive user interfaces and crafting efficient server-side logic.
              <br />
              <br />
              I thrive on challenges and am always eager to take on new projects that allow me to enhance my skills. 
              When I'm not coding, you might find me exploring new tech trends, reading, or engaging in creative problem-solving.
              <br />
              <br />
              With a background in full stack development, I am confident in my ability to deliver high-quality applications that not only meet but exceed user expectations.
            </p>
          </motion.div>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className={`mt-4 text-purple-600 font-semibold ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-800'}`}
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>

      <div className="p-6 mt-6 text-center bg-white rounded-md shadow-lg border-l-4 border-purple-500 border-purple-500  mx-auto">
        <motion.div
          className="flex items-center justify-center mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaLaptopCode size={30} className="text-purple-500 mr-2" />
          <h1 className="text-2xl font-bold text-purple-700">
            {nameText}
          </h1>
        </motion.div>
        
        <motion.h2
          className="text-xl font-semibold mt-2 text-gray-600"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {stackText}
        </motion.h2>
      </div>

      <div className="mt-8  rounded-lg p-4  text-justify mx-auto">
        <h2 className="text-center text-purple-800 font-semibold">
          This site is a work in progress especially the review section. However, the project section is ready for your view. TH
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
