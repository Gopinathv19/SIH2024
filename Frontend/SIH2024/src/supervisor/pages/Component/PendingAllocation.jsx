import React, { useState } from 'react';
import '../Style/PendingAllocation.css'; // Import the CSS file

const PendingAllocationRequests = ({ notifications }) => {
    // Example data for unallocated patients
    const unallocatedPatients = [
        {
            id: 'P001',
            name: 'Jane Smith',
            requestedDoctor: 'Dr. John Doe',
            doctorId: 'D001',
            requestDate: '2024-08-29',
            requestTime: '10:30 AM',
        },
        {
            id: 'P002',
            name: 'Robert Johnson',
            requestedDoctor: 'Dr. Emily Brown',
            doctorId: 'D002',
            requestDate: '2024-08-29',
            requestTime: '11:15 AM',
        },
        // Add more patient data as needed
    ];

    return (
        <div className="pending-allocation-requests-container">
            <h2>Pending Allocation Requests</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
            <table className="pending-requests-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Requested Doctor</th>
                        <th>Doctor ID</th>
                        <th>Request Date</th>
                        <th>Request Time</th>
                    </tr>
                </thead>
                <tbody>
                    {unallocatedPatients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.requestedDoctor}</td>
                            <td>{patient.doctorId}</td>
                            <td>{patient.requestDate}</td>
                            <td>{patient.requestTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PendingAllocationRequests;
