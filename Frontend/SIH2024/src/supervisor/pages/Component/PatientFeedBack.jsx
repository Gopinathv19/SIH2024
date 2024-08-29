import React, { useState } from 'react';
import '../Style/PatientFeedback.css'; // Import the CSS file

const PatientFeedback = () => {
    // Example feedback data
    const [feedbacks, setFeedbacks] = useState([
        { name: 'Jane Smith', date: '2024-08-20', feedback: 'Great session, very helpful!', status: 'Reviewed' },
        { name: 'John Doe', date: '2024-08-22', feedback: 'The session was too short.', status: 'Pending' },
        // Add more feedback data as needed
    ]);

    return (
        <div className="feedback-container">
            <h2>Patient Feedback</h2>
            <table className="feedback-table">
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Feedback</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback, index) => (
                        <tr key={index}>
                            <td>{feedback.name}</td>
                            <td>{feedback.date}</td>
                            <td>{feedback.feedback}</td>
                            <td>{feedback.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientFeedback;
