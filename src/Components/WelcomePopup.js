// WelcomePopup.js
import React, { useState } from "react";

function WelcomePopup({ setName }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalName = inputName.trim() === "" ? "Anonymous" : inputName;
    setName(finalName); // Set the visitor's name
    localStorage.setItem("visitorName", finalName); // Save name in localStorage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 text-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Welcome to My Portfolio!</h2>
        <p className="text-gray-700 mb-4">Please enter your name for a personalized greeting, or press the submit button to remain anonymous.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-purple-700"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default WelcomePopup;
