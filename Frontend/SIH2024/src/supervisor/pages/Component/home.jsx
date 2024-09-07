import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/home.css'
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <nav className="navbar">
            <h1>Student Therapist</h1>
            <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                 
                <li className="notification-icon">
                        <span className="icon" onClick={()=>{navigate("/pendingrequest")}}>&#128276;</span> {/* Notification bell icon */}
                
                </li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
