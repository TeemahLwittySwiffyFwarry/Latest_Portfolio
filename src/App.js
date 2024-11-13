import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import WelcomePopup from "./Components/WelcomePopup";
import GreetingPopup from "./Components/GreetingPopup";
import ResumeDownload from './Pages/ResumeDownload';
import Footer from './Components/Footer'
import CoverLetterPage from './Pages/CoverLetterPage';
import Review from './Pages/Review';
import AddReview from './Pages/AddReview'
import ReadReview from './Pages/ReadReview'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // State for sidebar collapse
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setFooterVisible(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleCollapse = () => {
    setCollapsed(prev => !prev); // Toggle the collapsed state
  };

  useEffect(() => {
    document.title = "OO | Portfolio";
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("visitorName");
    if (storedName) {
      setName(storedName);
      setShowGreeting(true);
    }
  }, []);

  useEffect(() => {
    if (name) {
      setShowGreeting(true);
    }
  }, [name]);

  return (
    <div className="min-h-screen overflow-hidden">
      {!name && <WelcomePopup setName={setName} />}
      {showGreeting && name && <GreetingPopup name={name} setShowGreeting={setShowGreeting} />}
      {/* Rest of your components */}
      <Router>
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex h-full">
          <Sidebar 
            isOpen={isOpen} 
            toggleSidebar={toggleSidebar} 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleCollapse={toggleCollapse}
            collapsed={collapsed} // Pass the collapsed state to Sidebar
          />
          <div 
  className={`flex-1 pt-20 md:pt-4 px-1 md:px-6 transition-all duration-300 overflow-auto ${
    darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
  } ${collapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-60'}`}
>


            <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
              <Route path="/skills" element={<Skills darkMode={darkMode}/>} />
              <Route path="/resume" element={<ResumeDownload />} />
              <Route path="/cover-letter" element={<CoverLetterPage />} />
              <Route path="/review" element={<Review darkMode={darkMode}/>} />
              <Route path="/read_review" element={<ReadReview darkMode={darkMode}/>} />
              <Route path="/add_review" element={<AddReview darkMode={darkMode}/>} />
            </Routes>
            <Footer footerVisible={footerVisible} />
          </div>
        </div>
        
      </Router>
      
    </div>
  );
}

export default App;
