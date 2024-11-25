// src/Pages/Projects.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Marzwell School Website",
    description: "An advanced full-stack project with unique functionalities and user experience.This project consumed two API's created by me.",
    type: "Full Stack",
    techStack: ["React", "Tailwind CSS", "Python Django"],
    videoUrl: "/mzvid.mp4",
    webLink: "https://marzwellschools.com",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Marzwell/tree/master",
  },
  {
    id: 2,
    title: "Event Management Dashboard",
    description: "A comprehensive front-end project with a responsive design. The dashboard has collapsible sidebar and also some functional features in the table view",
    type: "Front End",
    techStack: ["React", "Tailwind CSS"],
    videoUrl: "/event.mp4",
    webLink: "https://oluwayemisiolados-event-mgt-dashboard.netlify.app",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Alphatwelve_FE",
  },
  {
    id: 3,
    title: "Oluwayemisi Oladosu's Portfolio",
    description: "A responsive portfolio built with React and Tailwind CSS, featuring interactive project displays, smooth animations, and easy navigation, showcasing my development skills with a clean, engaging design.",
    type: "Full Stack",
    techStack: ["React", "Tailwind CSS, Python django"],
    videoUrl: "/port_fe.mp4",
    webLink: "https://oluwayemisi-oladosu-portfolio.netlify.app",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Latest_Portfolio",
  },
  {
    id: 4,
    title: "Reliance Errand",
    description: "This is a straightforward errand application that enables users to send individual messages both locally and internationally. It is currently a work in progress as I continue to develop it.",
    type: "Front End Project",
    techStack: ["React", "Tailwind CSS"],
    imageUrl: "/reliance.png",
    webLink: "",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Reliance_Global_Errand-/tree/master",
  },
  {
    id: 5,
    title: "Receipt Management System",
    description: "This project was developed at LASOP to primarily assess students' proficiency in JavaScript.",
    type: "Front End Project",
    techStack: ["HTML", "CSS", "Vanilla Javascript"],
    videoUrl: "/receipt1.mp4",
    webLink: "https://teemahlwittyswiffyfwarry.github.io/School_Receipt/",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/School_Receipt",
  },
  {
    id: 6,
    title: "Blog API",
    description: "This API is utilized by marzwellschools.com and includes sections for creating, listing, and managing blog posts.",
    type: "Backend Project",
    techStack: ["Python", "Django", "DBSQlite3"],
    videoUrl: "/blogapi.mp4",
    webLink: "https://marzwellblogbackend.pythonanywhere.com/api/posts/",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Marzwell_Blog_Backend",
  },
  {
    id: 7,
    title: "Marzwell API",
    description: "This API powers marzwellschools.com, with backend functionalities that encompass testimonials, registrations, and contact messages.",
    type: "Backend Project",
    techStack: ["Python", "Django", "DBSQlite3"],
    videoUrl: "/marzwell_backend.mp4",
    webLink: "https://marzwellblogbackend.pythonanywhere.com/api/posts/",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Marzwell_BE",
  },
  {
    id: 8,
    title: "Goufer API",
    description: "This API was created by a team of four backend developers. I specifically developed the Chat App API, incorporating Django Channels to enable real-time communication through WebSockets.",
    type: "Backend Project",
    techStack: ["Python", "Django", "DBSQlite3"],
    videoUrl: "/chat.mp4",
    webLink: "https://goufer-api-obm37ikxiq-uc.a.run.app/api/v1/",
    githubLink: "https://github.com/goufers/goufer-api/",
  },

  {
    id: 9,
    title: "Portfolio API",
    description: "Django-based backend supporting project data, reviews, and feedback, providing secure, efficient data handling and seamless integration with the frontend.",
    type: "Backend Project",
    techStack: ["Python", "Django", "DBSQlite3"],
    videoUrl: "/port_be.mp4",
    webLink: "https://teemahportfolio.pythonanywhere.com/api/reviews/",
    githubLink: "https://github.com/TeemahLwittySwiffyFwarry/Portfolio_BE/",
  },
];

const ProjectCard = ({ project, darkMode }) => {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
    className={`relative p-6 rounded-lg shadow-lg border border-l-4 border-purple-500 transition-transform transform hover:scale-105 overflow-auto ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800' // Updated background and text color
    }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-100 via-purple-200 to-gray-500 animate-gradientShift bg-[length:200%_200%] rounded-lg -z-10"
        style={{
          animation: "gradientShift 5s ease infinite",
        }}
      ></div>
      <h3 className="text-xl font-semibold mb-2 text-black text-center bg-gray-200 p-2 rounded-lg hover:bg-purple-100">
        {project.title}
      </h3>
      {project.videoUrl ? (
        <video
          ref={videoRef}
          src={isInView ? project.videoUrl : undefined} // Load video only if in view
          className="w-full h-50 object-cover rounded-md mb-4"
          autoPlay={isInView}
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-52 object-cover rounded-md mb-4"
          loading="lazy"
        />
      )}
      <p className={`text-sm mb-4 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{project.description}</p>
      <p className={`text-sm font-medium mb-2 text-purple-600`}>
        <span className="font-semibold">{darkMode ? 'Type:' : 'Type:'}</span> {project.type}
      </p>
      <p className={`text-sm font-medium mb-4 text-purple-600`}>
        <span className="font-semibold">{darkMode ? 'Tech Stack:' : 'Tech Stack:'}</span> {project.techStack.join(', ')}
      </p>

      <div className="flex justify-between mt-4">
        <a
          href={project.webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-100 hover:text-black bg-purple-800 hover:bg-purple-400 p-2 rounded"
        >
          View Project
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 border-purple-800 border-2 hover:text-black bg-white hover:bg-purple-400 p-2 rounded"
        >
          GitHub Repo
        </a>
      </div>
    </motion.div>
  );
};

const Projects = ({ darkMode = true }) => {
  return (
    <div className="p-6 font-sans">
      <h1 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
