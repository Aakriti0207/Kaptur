import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || BASE_URL,
  withCredentials: true, // sends the httpOnly cookie set by /auth/google/callback
});

export default api;