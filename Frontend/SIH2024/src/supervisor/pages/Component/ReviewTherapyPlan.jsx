import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../Style/ReviewTherapyPlan.css'; // Import the CSS file

const ReviewTherapyPlan = () => {
    // Example data for patients
    const patients = [
        {
            id: 'P001',
            name: 'Jane Smith',
        },
        // Add more patient data as needed
    ];

    const navigate = useNavigate(); // Initialize useNavigate hook

    return (
        <div className="review-therapy-plan-container">
            <h2>Review Therapy Plan</h2>
            <table className="patient-list-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>
                                <button 
                                    onClick={() => navigate("/patient-summary")} // Navigate with patient ID
                                    className="view-summary-button"
                                >
                                    View Summary
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTherapyPlan;
