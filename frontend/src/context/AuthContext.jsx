import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const API_URL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '')).replace(/\/+$/, '');

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session on load
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        if (!API_URL) {
            return {
                success: false,
                message: 'The API URL is not configured. Set VITE_API_URL in your Vercel project settings to your deployed backend URL.'
            };
        }

        try {
            const res = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                setUser(data.user);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                localStorage.setItem('adminToken', data.token);
                return { success: true };
            } else {
                return { success: false, message: data.message || 'Login failed' };
            }
        } catch {
            return {
                success: false,
                message: 'Unable to reach the server. Check that the backend is deployed and VITE_API_URL points to it.'
            };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
