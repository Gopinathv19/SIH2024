import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../Style/PatientSummary.css';

const PatientSummary = () => {
    const { id } = useParams();
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/patient/patients-details`);
                setPatients(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching patient data');
                setLoading(false);
            }
        };

        fetchPatientData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="patient-summary-container">
            <h2>Patient Summary</h2>
            {patients.length > 0 ? (
                <table className="patient-summary-table">
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Patient ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient._id} className="patient-summary-item">
                                <td>{patient.name}</td>
                                <td>{patient._id}</td>
                                <td>
                                    <Link to={`/summary/${patient._id}`}>
                                        <button className="view-summary-button">View Summary</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-patients-found">No patients found</p>
            )}
        </div>
    );
};

export default PatientSummary;
