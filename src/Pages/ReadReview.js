import React from 'react';

const ReadReview = ({ darkMode }) => {
  const reviews = [
    { name: 'John Doe', occupation: 'Engineer', reason: 'Employment', gender: 'Male', comment: 'Great service!', rating: 5 },
    { name: 'Jane Smith', occupation: 'Designer', reason: 'Product Purchase', gender: 'Female', comment: 'Very satisfied.', rating: 4 },
    { name: 'Ademola', occupation: 'IT ', reason: 'Product Purchase', gender: 'Female', comment: 'Very satisfied.', rating: 5 },
    // Add more sample reviews as needed
  ];

  // Reverse the order of reviews
  const reversedReviews = [...reviews].reverse();

  return (
    <div className={`p-8 min-h-screen  ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Read Reviews</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {reversedReviews.map((review, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow-md border-l-4 border-purple-500  ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-900'
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{review.name}</h2>
            <p className="font-semibold">{review.occupation}</p>
            <p className="text-sm text-gray-500 mb-2">{review.reason}</p>
            <p className="text-sm mb-4">{review.gender}</p>
            <p className="mb-4">{review.comment}</p>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Rating:</span>
              <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadReview;
