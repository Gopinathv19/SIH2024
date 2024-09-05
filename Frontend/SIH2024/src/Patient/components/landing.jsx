import React, { useState } from 'react';
import DashboardContent from './dashboard';
import Dash from './dashboard2';
import Sidebar from './sidebar'; // Import Sidebar
import Header from './header'; // Import Header
import '../cssfile/landing.css';

function LandingPage() {
    // State to manage sidebar visibility
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="landing-page">
            {/* Header */}
            <div className="headerapp">
                <Header sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            </div>

            <div className="container">
                {/* Sidebar */}
                <div className="main-content">
                    {sidebarVisible && <Sidebar />} {/* Conditionally render Sidebar */}
                </div>

                {/* Dashboard Content */}
                <div className="content">
                    <div className="dashboard">
                        <DashboardContent />
                    </div>
                    <div className="dashboard2">
                        <Dash />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
