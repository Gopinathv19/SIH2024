import React from 'react';
import '../Style/ManageAllocation.css'; // Import CSS for Manage Allocations

const ManageAllocations = ({ notifications }) => {
    return (
        <div className="manage-allocations">
            <h2>Manage Allocations</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
            <p>Oversee and adjust current doctor-patient allocations.</p>
            {/* Add more content as needed */}
        </div>
    );
};

export default ManageAllocations;
