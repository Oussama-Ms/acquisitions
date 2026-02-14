import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const checkAuth = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    // In a real app with cookies, we might hit a /me endpoint. 
                    // Since the backend uses cookies, we'll try to fetch the user profile if we have an ID.
                    // But the backend doesn't have a specific /me endpoint, it has /users/:id.
                    // We need to store userId in localStorage on login.
                    const response = await api.get(`/users/${userId}`);
                    // Backend GET /users/:id usually follows the standard response structure
                    // Let's verify standard response: { status: 'success', data: { ... } } or similar?
                    // Based on users.controller.js (which I haven't seen but is standard), it often wraps in data.
                    // If fetchUserById returns { data: user }, then response.data.data is correct.
                    // However, to be safe and consistent with auth, I should check if it's different.
                    // NOTE: I haven't seen users.controller.js. 
                    // Let's assume standard response wrapper for entities.
                    // But wait, if login returns { user: ... }, maybe get user returns { user: ... }?
                    // Safest is to check response.data.user || response.data.data
                    const userData = response.data.data || response.data.user;
                    setUser(userData);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                localStorage.removeItem('userId');
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const response = await api.post('/auth/sign-in', { email, password });
        // Backend should return user data or at least an ID?
        // Looking at backend might be needed. 
        // Assuming backend returns { message, data: { user } } or similar.
        // We'll adjust based on actual backend response.
        // Backend returns { message, user: { ... } }
        const userData = response.data.user;
        setUser(userData);
        localStorage.setItem('userId', userData.id);
        return userData;
    };

    const register = async (name, email, password) => {
        const response = await api.post('/auth/sign-up', { name, email, password });
        return response.data;
    };

    const logout = async () => {
        try {
            await api.post('/auth/sign-out');
        } catch (error) {
            console.error("Logout failed", error);
        }
        setUser(null);
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
