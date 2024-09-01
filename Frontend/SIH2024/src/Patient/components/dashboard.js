import React from 'react';
import '../cssfile/dashboard.css';

function DashboardContent() {
    const user = {
        name: 'John Doe',
        therapyStatus: 'Active',
        profilePicture: 'https://via.placeholder.com/100',
        progress: 65,
        upcomingSessions: [
            { date: '2024-08-26', time: '10:00 AM', type: 'Speech Therapy' },
            { date: '2024-08-30', time: '2:00 PM', type: 'Follow-up Session' }
        ]
    };
    return (
        <div className='dashboardcontent'>
            <div className='profile-section-dashboard'>
                <div className='profile-picture'>
                    <img src={user.profilePicture} alt="Profile" />
                </div>
                <div className='profile-info'>
                    <h3>{user.name}</h3>
                    <p>Therapy Status: {user.therapyStatus}</p>
                </div>
            </div>

            <div className='dashboard-statistics'>
                <div className='stat-card'>
                    <h3>Ongoing Sessions</h3>
                    <p>3</p>
                </div>
                <div className='stat-card'>
                    <h3>Completed Exercises</h3>
                    <p>15</p>
                </div>
                <div className='stat-card'>
                    <h3>Upcoming Appointments</h3>
                    <p>2</p>
                </div>
            </div>

            <div className='progress'>
                <br/>
                <h3>Therapy Progress</h3>
                <div className='progress-bar'>
                    <div className='progress-fill' style={{ width: `${user.progress}%` }}></div>
                </div>
            </div>

            <div className='upcoming-sessions'>
                <h3>Upcoming Sessions</h3>
                {user.upcomingSessions.map((session, index) => (
                    <div key={index} className='session-card'>
                        <p><strong>Date:</strong> {session.date}</p>
                        <p><strong>Time:</strong> {session.time}</p>
                        <p><strong>Type:</strong> {session.type}</p>
                    </div>
                ))}
            </div>
       </div>
    );
}

export default DashboardContent;
