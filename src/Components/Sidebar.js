import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { BsFileText, BsToggleOn } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";

const Sidebar = ({ darkMode, toggleDarkMode, toggleCollapse, collapsed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebarOnMobile = () => {
    if (isOpen) setIsOpen(false); 
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:hidden transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white border-b' : 'bg-white text-gray-800 shadow-md'}`}>
        <img src="./logo2.png" alt="Logo" className="h-12 w-16 p-1" />
        <button
          onClick={handleSidebarToggle}
          className={`p-2 rounded focus:outline-none transition-colors duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <AiOutlineClose className="text-2xl" /> : <RxHamburgerMenu className="text-2xl" />}
        </button>
      </div>

      <div className={`fixed transition-all duration-300 z-40 h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} ${collapsed ? 'w-16' : 'w-full md:w-60'} ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:left-0 md:border-r border-gray-300 overflow-hidden p-2 md:ml-4`}>
        <div className="flex items-center justify-between mb-4 px-2 pt-2">
          <img src="./logo2.png" alt="Logo" className="h-12 w-16" />
        </div>

        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-6 h-[calc(100vh-100px)]">
            {/* Sidebar navigation items with Links */}
            {[
              { icon: <CiHome />, label: 'Dashboard', path: '/' },
              { icon: <FaRegCalendarAlt />, label: 'Projects', path: '/projects' },
              { icon: <FaRegUser />, label: 'Skills', path: '/skills' },
              { icon: <BsFileText />, label: 'Resume', path: '/resume' },
              { icon: <IoChatbubblesOutline />, label: 'Cover Letter', path: '/cover-letter' },
              { icon: <IoSettingsOutline />, label: 'Review', path: '/review' },
            ].map(({ icon, label, path }, index) => (
              <li key={index} className={`relative flex items-center gap-2 p-2 ${location.pathname === path ? 'bg-purple-200 text-purple-600' : ''} ${!collapsed ? 'group hover:bg-purple-100' : ''}`}>
                <Link 
                  to={path} 
                  className="flex items-center w-full"
                  onClick={closeSidebarOnMobile} // Close sidebar on click
                >
                  <span className={`text-xl group-hover:text-purple-500 ${collapsed ? 'mx-auto' : 'mr-4'} relative`}>
                    {icon}
                  </span>
                  {!collapsed && <span className="group-hover:text-purple-500">{label}</span>}
                </Link>
              </li>
            ))}

            {/* Collapse Button */}
            <li className={`flex items-center gap-2 cursor-pointer p-2 ${!collapsed ? 'group hover:bg-purple-100' : ''}`} onClick={toggleCollapse}>
              {collapsed ? <MdKeyboardDoubleArrowRight className="text-xl ml-2 group-hover:text-purple-500" /> : <MdKeyboardDoubleArrowLeft className="text-xl mr-4 group-hover:text-purple-500" />}
              {!collapsed && <span className="group-hover:text-purple-500">Collapse</span>}
            </li>

            {/* Dark Mode Toggle */}
            <li className={`flex items-center gap-3 cursor-pointer p-2 ${!collapsed ? 'group hover:bg-purple-100' : ''}`} onClick={toggleDarkMode}>
              {darkMode ? <RxSwitch className="text-xl text-white group-hover:text-purple-500" /> : <BsToggleOn className="text-xl text-gray-500 mr-4 group-hover:text-purple-500" />}
              {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
            </li>

            <hr />

            {/* Profile Section */}
            <li>
              <div className="flex items-center justify-between mt-auto px-2 mb-4">
                <div className="flex items-center">
                  <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full border-2 border-gray-200" />
                  {!collapsed && (
                    <div className="ml-2">
                      <span>Oluwayemisi Oladosu</span>
                      <span className="block text-sm text-gray-500">oladosuoluwayemisi@gmail.com</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={handleSidebarToggle}></div>
      )}
    </div>
  );
};

export default Sidebar;
