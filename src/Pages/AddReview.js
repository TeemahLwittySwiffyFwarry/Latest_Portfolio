import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';

const AddReview = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    reason: '',
    gender: '',
    comment: '',
    rating: 0, // Default rating is 0
    whatsapp: '', // New field for WhatsApp
    whatsappOptIn: false, // Checkbox for opting in to provide WhatsApp
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleStarClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', formData);

    // Show success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Review Submitted!',
      text: 'Thank you for your feedback.',
      confirmButtonText: 'OK',
      confirmButtonColor: darkMode ? '#4A5568' : '#3182CE', // Adjust color based on dark mode
    });
  };

  return (
    <div className={`p-8 min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'}`}>
      <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-md w-full max-w-lg ${darkMode ? 'bg-gray-500 text-gray-100' : 'bg-white text-black'}`}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add a Review</h1>

        <label className="block mb-2 font-semibold">Name</label>
        <input type="text" name="name" onChange={handleChange} className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`} required />

        <label className="block mb-2 font-semibold">Occupational Field</label>
        <select name="occupation" onChange={handleChange} className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`}>
          <option value="">Select Occupation</option>
          <option value="Engineer">IT</option>
          <option value="Designer">Education</option>
          <option value="Teacher">HR</option>
          <option value="Connection">Connection</option>
          <option value="Other">Others</option>
        </select>

        <label className="block mb-2 font-semibold">Reason</label>
        <select name="reason" onChange={handleChange} className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`}>
          <option value="">Select Reason</option>
          <option value="Employment">Employment</option>
          <option value="Product Purchase">Product Purchase</option>
          <option value="Service Inquiry">Service Inquiry</option>
          <option value="Other">Other</option>
        </select>

        <label className="block mb-2 font-semibold">Gender</label>
        <select name="gender" onChange={handleChange} className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="block mb-2 font-semibold">Comment</label>
        <textarea name="comment" onChange={handleChange} className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`} rows="4" required></textarea>

        <label className="block mb-2 font-semibold">Rating</label>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={`cursor-pointer ${star <= formData.rating ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>

        {/* WhatsApp Contact Field */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="whatsappOptIn"
            onChange={handleCheckboxChange}
            className="mr-2"
            checked={formData.whatsappOptIn}
          />
          <span className="font-semibold">Provide WhatsApp Contact?</span>
        </div>

        {formData.whatsappOptIn && (
          <div>
            <label className="block mb-2 font-semibold">WhatsApp Number (Optional)</label>
            <input
              type="text"
              name="whatsapp"
              onChange={handleChange}
              className={`w-full p-2 mb-4 border rounded-md ${darkMode ? 'bg-gray-200 text-gray-800' : 'bg-white text-black'}`}
            />
          </div>
        )}

        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
