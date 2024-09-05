import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cssfile/sidebar.css';

function Sidebar() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="sidebar">
            <div className="profile-section">
                <div className="profile-picture">
                    <img src="https://via.placeholder.com/100" alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>Patient Name</h3>
                    <p>Therapy Status: Active</p>
                    <button className="edit-profile-btn">Edit</button>
                </div>
            </div>

            <nav className="navigation-menu">
                <ul>
                    <li><Link to="/landingpage">Dashboard</Link></li>
                    <li><Link to="/exercises">Practice Exercises</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                    <li><Link to="/session-history">Session History</Link></li>
                </ul>
            </nav>
{/*                     COMMUNICATION TOOLS DISABLED 

            <div className="collapsible-section">
                <label className="collapsible-btn" onClick={() => toggleSection('communication')}>
                    Communication Tools
                </label>
                {openSection === 'communication' && (
                    <ul className="collapsible-content">
                        <li><Link to="#messages">Messages</Link></li>
                        <li><Link to="#notifications">Notifications</Link></li>
                    </ul>
                )}
            </div> */}

            <div className="collapsible-section">
                <label className="collapsible-btn" onClick={() => toggleSection('resources')}>
                    Resources
                </label>
                {openSection === 'resources' && (
                    <ul className="collapsible-content">
                        <li><Link to="/educational-materials">Educational Materials</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                )}
            </div>

            <div className="collapsible-section">
    <label className="collapsible-btn" onClick={() => toggleSection('settings')}>
        Settings
    </label>
    {openSection === 'settings' && (
        <ul className="collapsible-content">
            <li><Link to="#account-settings">Account Settings</Link></li>
            <li><Link to="#emergency-contact">Emergency Contact Info</Link></li>
        </ul>
    )}
</div>

<div className="collapsible-section">
    <label className="collapsible-btn" onClick={() => toggleSection('therapy')}>
        Therapy Preferences
    </label>
    {openSection === 'therapy' && (
        <ul className="collapsible-content">
            <li><Link to="#therapy-preferences">Therapy Preferences</Link></li>
        </ul>
    )}
</div>

            <div className="collapsible-section">
                <label className="collapsible-btn" onClick={() => toggleSection('support')}>
                    Support and Feedback
                </label>
                {openSection === 'support' && (
                    <ul className="collapsible-content">
                        <li><Link to="#contact-support">Contact Support</Link></li>
                        <li><Link to="#feedback-surveys">Feedback & Surveys</Link></li>
                    </ul>
                )}
            </div>

            <div className="progress-snapshot">
                <h4>Progress</h4>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div className="alerts-section">
                <h4>Alerts</h4>
                <ul>
                    <li>Missed Session: Aug 24</li>
                    <li>New Exercise Assigned</li>
                    <li>Upcoming Deadline: Aug 30</li>
                </ul>
            </div>

            <div className="logout-section">
                <button className="logout-btn">LogOut</button>
            </div>
        </div>
    );
}

export default Sidebar;