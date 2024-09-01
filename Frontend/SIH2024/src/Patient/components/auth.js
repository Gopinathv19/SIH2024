import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfile/auth.css'; // Import CSS for styling

function AuthPage() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="auth-container">
            <h2>Welcome to the Patient Portal</h2>
            <div className="button-container">
                <button className="auth-button" onClick={goToLogin}>
                    Login
                </button>
                <button className="auth-button" onClick={goToSignup}>
                    Signup
                </button>
            </div>
        </div>
    );
}

export default AuthPage;
