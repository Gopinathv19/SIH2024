import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ReviewTherapyPlan.css';
import axios from 'axios';

const ReviewTherapyPlan = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:3000/patient/patients-details'); // Fetch patient data from API
                console.log('Fetched patients:', response.data); // Log the response data for debugging
                setPatients(response.data); // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="review-therapy-plan-container">
            <h2>Patient-Summary</h2>
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
                        <tr key={patient._id}>
                            <td>{patient._id}</td>
                            <td>{patient.name}</td>
                            <td>
                                <button 
                                    onClick={() => navigate("/patient-summary")} 
                                    className="view-summary-button"
                                >
                                    Patient Summary Status
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
