import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ darkMode }) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl md:text-5xl font-bold text-purple-600 animate-pulse mb-8">
        Reviews
      </h1>

      <div className={`flex flex-col md:flex-row gap-8 0 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'}`}>
        {/* Read Review Card */}
        <Link to="/read_review" className={`w-72 h-52 p-6 shadow-md rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg border border-l-4 border-purple-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'}`}>
          <h2 className="text-2xl font-semibold text-purple-500">Read Reviews</h2>
          <p className="text-center">See what others have to say about. Be real/factual with your words.</p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
            Read Reviews
          </button>
        </Link>

        {/* Add Review Card */}
        <Link to="/add_review" className={`w-72 h-52 p-6 bg-white shadow-md rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg border border-l-4 border-purple-500 ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'}`}>
          <h2 className="text-2xl font-semibold text-purple-600">Add a Review</h2>
          <p className="text-center ">Share your thoughts with me. Constructive critism is welcomed.</p>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-500">
            Add Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
