import axios from 'axios';

// Use environment variable or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // For cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor to handle errors (e.g., 401 Unauthorized)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.config?.url, error.response?.status, error.response?.data);
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
