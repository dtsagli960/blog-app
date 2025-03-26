import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/axiosApi",
});

// Add JWT to requests
axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosApi;