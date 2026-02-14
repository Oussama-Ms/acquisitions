import axios from 'axios';

// If we are in dev (Vite), use localhost.
// If in Prod (Docker/Railway), use relative path (automatic)
const API_URL = import.meta.env.DEV ? 'http://localhost:3000/api' : '/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // For cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
  response => response,
  error => {
    console.error(
      'API Error:',
      error.config?.url,
      error.response?.status,
      error.response?.data
    );
    const { response } = error;
    if (response && response.status === 401) {
      // Allow the AuthContext to handle redirect if needed,
      // or just reject so the component can handle it.
      // Usually, we might trigger a logout here if the token is invalid.
    }
    return Promise.reject(error);
  }
);

export default api;
