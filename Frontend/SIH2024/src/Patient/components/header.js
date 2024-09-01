import React from 'react';
import '../cssfile/header.css'

export default function Header({ sidebarVisible, toggleSidebar }) {
    return (
        <header>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                {sidebarVisible ? 'Hide Menu' : 'Show Menu'}
            </button>
            <h1>Patient Landing Page</h1>
        </header>
    );
}
