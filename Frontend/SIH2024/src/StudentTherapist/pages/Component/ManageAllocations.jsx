import React from 'react';
import '../Style/ManageAllocation.css'; // Import CSS for Manage Allocations

const ManageAllocations = ({ allocations }) => {
    return (
        <div className="manage-allocations">
            <h2>Manage Allocations</h2>
            <table className="allocations-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Allocation ID</th>
                        <th>Patient Name</th>
                        <th>Doctor Requested</th>
                        <th>Status</th>
                        <th>Therapy Time & Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allocations.map((allocation, index) => (
                        <tr key={index}>
                            <td>{allocation.patientId}</td>
                            <td>{allocation.allocationId}</td>
                            <td>{allocation.patientName}</td>
                            <td>{allocation.doctorRequested}</td>
                            <td>{allocation.status}</td>
                            <td>{allocation.status === 'Accepted' ? allocation.therapyTime : 'N/A'}</td>
                            <td>
                                {allocation.status === 'Rejected' ? (
                                    <button className="allocate-doctor-btn">Allocate Doctor</button>
                                ) : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Oversee and adjust current doctor-patient allocations.</p>
        </div>
    );
};

export default ManageAllocations;
