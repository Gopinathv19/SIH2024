// Doctors.js
import React from 'react';
import '../Style/Doctor.css'; // Import CSS for Doctors

const Doctors = () => {
    // Sample data for doctors
    const doctors = [
        { id: 'D001', name: 'Dr. John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
        { id: 'D002', name: 'Dr. Emily Brown', email: 'emilybrown@example.com', phone: '987-654-3210' },
        { id: 'D003', name: 'Dr. Michael Green', email: 'michaelgreen@example.com', phone: '555-666-7777' },
        // Add more doctor data as needed up to 100
    ];

    return (
        <div className="doctors">
            <h2>Doctors</h2>
            <p>Manage and view the list of doctors available for allocation.</p>
            <table className="doctor-table">
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Doctors;
