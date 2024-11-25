// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://teemahportfolio.pythonanywhere.com/api/',  // Replace with your actual backend base URL
});

export default axiosInstance;
