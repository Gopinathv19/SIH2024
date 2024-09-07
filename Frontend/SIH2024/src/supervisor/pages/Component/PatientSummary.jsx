import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../Style/PatientUpdate.css';

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
                patients.map((patient) => (
                    <div key={patient._id} className="patient-summary-item">
                        <p><strong>Patient Name:</strong> {patient.name}</p>
                        <p><strong>Patient ID:</strong> {patient._id}</p>
                        <Link to={`/summary/${patient._id}`}>
                            <button className="view-summary-button">View Summary</button>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No patients found</p>
            )}
        </div>
    );
};

export default PatientSummary;
