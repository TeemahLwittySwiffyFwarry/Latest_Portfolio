// GreetingPopup.js
import React, { useEffect, useState } from "react";

function GreetingPopup({ setShowGreeting }) {
  const [name, setName] = useState(localStorage.getItem("visitorName") || "");

  useEffect(() => {
    // Set a timer to automatically close the greeting after 10 minutes (600,000 ms)
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 600000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [setShowGreeting]);

  useEffect(() => {
    // Remove the name from local storage when the page is closed
    const handleBeforeUnload = () => {
      localStorage.removeItem("visitorName");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    name && (
      <div className="fixed top-4 right-4 bg-purple-500 left-1/2 -translate-x-1/2 text-gray-100 rounded-lg md:right-4 md:left-auto p-4 shadow-lg z-[101]">
        <h1 className="text-sm font-bold">Welcome, {name}!</h1>
        <p>Thanks for visiting my site.</p>
      </div>
    )
  );
}

export default GreetingPopup;
