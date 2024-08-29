// Patient.js
import React from 'react';
import '../Style/patient.css'; // Import CSS for Patients

const Patient = () => {
    // Sample data for patients
    const patients = [
        { id: 'P001', name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
        { id: 'P002', name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
        { id: 'P003', name: 'Alice Johnson', email: 'alicejohnson@example.com', phone: '555-666-7777' },
        // Add more patient data as needed up to 100
    ];

    // Handler functions for button actions
    const handleAllocateDoctor = (patientId) => {
        console.log(`Allocating doctor for patient ID: ${patientId}`);
        // Add logic to allocate doctor to patient
    };

    const handleMessagePatient = (patientId) => {
        console.log(`Messaging patient ID: ${patientId}`);
        // Add logic to message the patient
    };

    return (
        <div className="patient-page">
            <h2>Patient Requests</h2>
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.email}</td>
                            <td>{patient.phone}</td>
                            <td>
                                <button onClick={() => handleAllocateDoctor(patient.id)}>
                                    Allocate Doctor
                                </button>
                                <button onClick={() => handleMessagePatient(patient.id)}>
                                    Message Patient
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Patient;
