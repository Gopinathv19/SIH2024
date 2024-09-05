import React from 'react';
import DashboardContent from './dashboard';
import Dash from './dashboard2';
import '../cssfile/landing.css';

function LandingPage() {

    return (
        <div className="landing-page">
                <div className="dashboard">
                    <DashboardContent />
                </div>
                <div className='dashboard2'>
                    <Dash/>
                </div>
                
        </div>
    );
}

export default LandingPage;
