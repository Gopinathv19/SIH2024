// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import '../cssfile/patientlogin.css'; // Import CSS for styling

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        // Placeholder for authentication logic
        // Replace with actual authentication logic
        if (username === 'patient' && password === 'password') {
            // Redirect to the dashboard or another page upon successful login
            navigate('/landingpage');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Patient Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
