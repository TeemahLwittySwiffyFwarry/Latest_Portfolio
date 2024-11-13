// src/components/Navbar.js
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both icons

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-gray-800 w-full md:hidden fixed top-0 z-30">
      <img src="./logo1.png" className="h-12 w-12" alt="Oluwayemisi Oladosu" />
      <button onClick={toggleSidebar} className="text-gray-800">
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>
    </div>
  );
};

export default Navbar;
