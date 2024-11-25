// src/components/Navbar.js
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both icons
import {Link} from 'react-router-dom'

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-gray-800 w-full md:hidden fixed top-0 z-30">
      <Link to="/">
        <div className="flex items-center justify-between mb-4 px-2 pt-2">
          <img src="./logo2.png" alt="Logo" className="h-12 w-16" />
        </div></Link>
      <button onClick={toggleSidebar} className="text-gray-800">
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>
    </div>
  );
};

export default Navbar;
