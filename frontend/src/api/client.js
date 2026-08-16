import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // sends the httpOnly cookie set by /auth/google/callback
});

export default api;