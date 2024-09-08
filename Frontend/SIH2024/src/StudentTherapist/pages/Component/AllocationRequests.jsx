import React, { useState } from 'react';
import '../Style/AllocationRequest.css'; // Import CSS for Allocation Requests

const AllocationRequests = () => {
    // State to hold form inputs
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add functionality here to handle form submission
        // For example, save the allocation request to a server or database

        console.log({
            patientName,
            doctorName,
            appointmentDate,
            appointmentTime,
        });

        // Reset form fields after submission
        setPatientName('');
        setDoctorName('');
        setAppointmentDate('');
        setAppointmentTime('');
    };

    return (
        <div className="allocation-requests">
            <h2>Allocation Requests</h2>
            <p>View and manage patient requests for doctor allocation.</p>
            
            {/* Form for allocation */}
            <form onSubmit={handleSubmit} className="allocation-form">
                <div className="form-group">
                    <label htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="doctorName">Doctor Name:</label>
                    <input
                        type="text"
                        id="doctorName"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="appointmentDate">Appointment Date:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="appointmentTime">Appointment Time:</label>
                    <input
                        type="time"
                        id="appointmentTime"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit" className="submit-btn">Assign</button>
            </form>
        </div>
    );
};

export default AllocationRequests;
