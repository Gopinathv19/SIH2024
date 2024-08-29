import React, { useState } from 'react';
import '../Style/Notification.css'; // Import CSS for Notifications

const Notifications = ({ onPendingAllocation, onManageAllocation }) => {
    // Example notifications data
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'patient', message: 'New patient request from John Doe' },
        { id: 2, type: 'doctor', message: 'Dr. Emily Brown accepted a new patient' },
        // Add more notifications as needed
    ]);

    // Function to handle sending notification to the appropriate component
    const handleSendNotification = (notification) => {
        if (notification.type === 'patient') {
            onPendingAllocation(notification.message);
        } else if (notification.type === 'doctor') {
            onManageAllocation(notification.message);
        }
    };

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <p>Check recent alerts and updates regarding allocations and patient requests.</p>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        {notification.message}{' '}
                        <button onClick={() => handleSendNotification(notification)}>Save</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
