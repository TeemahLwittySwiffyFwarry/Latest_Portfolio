import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import ReviewPopup from '../Components/ReviewPopup';

const ReadReview = ({ darkMode }) => {
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get('/reviews/');
        setReviews(response.data); // Store fetched reviews
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // Filter and reverse the reviews to show only approved reviews
  const approvedReviews = [...reviews]
    .filter(review => review.is_approve)
    .reverse();
  
   // Function to toggle the 'See More' / 'See Less' state
   const toggleReadMore = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={`p-8 min-h-screen ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <ReviewPopup
          message="Check out my latest reviews!" 
          showDuration={2000}
          hideDuration={30000}
          darkMode={darkMode}
         
        />
      <h1 className="text-3xl font-bold mb-6 text-center">Read Reviews</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {approvedReviews.map((review, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow-md border-l-4 border-purple-500 ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{review.name}</h2>
            <p className="font-semibold">{review.occupation}</p>
            <p className="text-sm text-gray-500 mb-2">{review.reason}</p>
            <p className="text-sm mb-4">{review.gender}</p>
            {/* Displaying the comment with truncation */}
            <p className="mb-4 text-justify">
              {expandedReviews[index]
                ? review.comment
                : `${review.comment.substring(0, 200)}...`} {/* Truncate comment */}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => toggleReadMore(index)}
              >
                {expandedReviews[index] ? ' See Less' : ' See More'}
              </span>
            </p>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Rating:</span>
              <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
            </div>
          <hr className="mt-4" />
          <p className="mt-4"><p className="font-bold">My Reply:</p> {review.reply}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadReview;
