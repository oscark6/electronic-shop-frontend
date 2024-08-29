// RegisterPage.js
import React, { useState } from 'react';
// import { register } from './api';
import './Register.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer'); // default role
    const [details, setDetails] = useState({});

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(username, password, role, details);
            // Handle successful registration
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
            </select>
            {/* Add fields for role-specific details */}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
