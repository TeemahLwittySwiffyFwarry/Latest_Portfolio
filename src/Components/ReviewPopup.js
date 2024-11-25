import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewPopup = ({ message, imageUrl = '/popup.jpg', showDuration = 5000, hideDuration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("ReviewPopup Component Rendered"); // Check if component is mounting

    let showTimer, hideTimer;

    // Toggle visibility of the popup
    const toggleVisibility = () => {
      setIsVisible(true);
      showTimer = setTimeout(() => {
        setIsVisible(false);
        hideTimer = setTimeout(toggleVisibility, hideDuration);
      }, showDuration);
    };

    toggleVisibility();

    // Clear timers on component unmount
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [showDuration, hideDuration]);

  // Close popup handler
  const handleClose = () => {
    console.log("Popup closed manually");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 bg-purple-200 p-5 rounded-lg shadow-lg z-60 max-w-xs text-center flex flex-col items-center space-y-4">
        {/* Check image URL */}
        <p className="text-gray-800 font-medium">{message}</p>
        
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Popup" // Ensure alt text is set
            className="w-full h-auto rounded-md"
            onError={() => console.log("Error loading image")} // Log if image fails to load
          />
        ) : (
          <p>Image not available</p> // Placeholder if image is missing
        )}
        
        
        
        <div className="flex flex-row justify-between w-full ">
          <Link to="/add_review" className="w=1/2">
            <button
              type="button"
              className="w-full py-5 px-4 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 font-bold text-purple-800 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              onClick={() => Swal.fire({ icon: 'info', title: 'Add a Review', text: 'You can now add your review!' })}
            >
              Add Review
            </button>
          </Link>
          <Link to="/read_review" className="w=1/2">
            <button
              type="button"
              className="w-full py-5 px-4 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 font-bold text-purple-800 rounded-lg shadow hover:bg-green-600 transition duration-300"
              onClick={() => Swal.fire({ icon: 'info', title: 'View Reviews', text: 'Here are the reviews!' })}
            >
              Read Review
            </button>
          </Link>
        </div>
        
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 p-2 right-2 text-gray-600 hover:text-gray-900 text-lg font-bold"
        >
          &times;
        </button>
      </div>
    )
  );
};

export default ReviewPopup;
