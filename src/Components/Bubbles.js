// src/Components/Bubbles.js
import React, { useEffect } from "react";
import "./Bubbles.css";

const Bubbles = () => {
  useEffect(() => {
    const container = document.querySelector(".bubble-container");
    for (let i = 0; i < 30; i++) { // Adjust the number for more bubbles
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${2 + Math.random() * 5}s`; // Vary speed
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      bubble.style.width = `${10 + Math.random() * 40}px`;
      bubble.style.height = bubble.style.width;
      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
};

export default Bubbles;
