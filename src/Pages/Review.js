import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ darkMode }) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl md:text-5xl font-bold text-purple-600 animate-pulse mb-8">
        Reviews
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Read Review Card */}
        <Link to="/read_review" className="w-72 h-40 p-6 bg-white shadow-md rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg border-2 border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-600">Read Reviews</h2>
          <p className="text-center text-gray-500">See what others have to say.</p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
            Read Reviews
          </button>
        </Link>

        {/* Add Review Card */}
        <Link to="/add_review" className="w-72 h-40 p-6 bg-white shadow-md rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg border-2 border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-600">Add a Review</h2>
          <p className="text-center text-gray-500">Share your thoughts with us.</p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
            Add Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
