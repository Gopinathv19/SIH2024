import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/home.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Supervisor Name</h1>
            <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                 
                <li className="notification-icon">
                    <Link to="/notifications">
                        <span className="icon">&#128276;</span> {/* Notification bell icon */}
                    </Link>
                </li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
