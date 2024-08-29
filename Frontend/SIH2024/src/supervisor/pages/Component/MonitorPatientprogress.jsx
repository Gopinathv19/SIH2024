import React, { useState } from 'react';
import '../Style/MonitorPatientProgress.css'; // Import the CSS file

const MonitorPatientProgress = () => {
    const [sessions, setSessions] = useState(Array(10).fill({ status: 'Not Started', details: '' }));
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleSessionUpdate = (index, field, value) => {
        const updatedSessions = [...sessions];
        updatedSessions[index][field] = value;
        setSessions(updatedSessions);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSessions = sessions.filter(session => 
        session.details.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);
    const paginatedSessions = filteredSessions.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div className="patient-progress-container">
            <h2>Monitor Patient Progress</h2>
            <div className="patient-info">
                <p><strong>Patient Name:</strong> John Doe</p>
                <p><strong>Condition:</strong> Physical Therapy</p>
            </div>
            <input 
                type="text" 
                placeholder="Search by details..." 
                value={searchTerm} 
                onChange={handleSearch}
                className="search-input"
            />
            <table className="progress-table">
                <thead>
                    <tr>
                        <th>Session</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedSessions.map((session, index) => (
                        <tr key={index}>
                            <td>Session {index + 1}</td>
                            <td>
                                <select 
                                    value={session.status} 
                                    onChange={(e) => handleSessionUpdate(index, 'status', e.target.value)}
                                >
                                    <option value="Not Started">Not Started</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Missed">Missed</option>
                                </select>
                            </td>
                            <td>
                                <textarea 
                                    value={session.details} 
                                    onChange={(e) => handleSessionUpdate(index, 'details', e.target.value)}
                                />
                            </td>
                            <td>
                                <button onClick={() => alert('Reschedule Session')}>Reschedule</button>
                                <button onClick={() => alert('Mark as Complete')}>Mark Complete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button 
                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button 
                    onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MonitorPatientProgress;
