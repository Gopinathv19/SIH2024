import React from 'react';
import '../Style/Dashboard.css'; // Import CSS for Dashboard
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
           
            <img 
                src="path_to_supervisor_image.jpg"  
                alt="Supervisor" 
                className="supervisor-image"
            />

         
            <ul className='dashboard-links'>
                 <li><Link to="/update-profile">Update Profile</Link></li>
                 
                
                <li><Link to="/manage-allocations">Manage Patient Allocations</Link></li>
                <li><Link to="/pending-requests">Pending Allocation Requests</Link></li>
                <li><Link to="/review-plans">Review Therapy Plans</Link></li>
                <li><Link to="/monitor-progress">Monitor Patient Progress</Link></li>
                <li><Link to="/patient-feedback">Patient Feedback</Link></li>
                <li><Link to="/therapist-communication">Therapist Communication</Link></li>
                 
                <li><Link to="/training-resources">Training and Resources</Link></li>
                <li><Link to="/patients">Patient-List</Link></li>
                <li><Link to="/doctor">Doctor-List</Link></li>
                 
              
                
                
            </ul>
        </div>
    );
};

export default Dashboard;
