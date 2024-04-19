// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import "./style.css"
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { email, password });
            toast.success('User registered successfully. OTP sent to email.');
        } catch (error) {
            console.error('Registration failed:', error.response.data.error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
        <p> Already have account Register here </p>
            <Link to="/login">Login</Link>
            </>
    );
};

export default Register;
