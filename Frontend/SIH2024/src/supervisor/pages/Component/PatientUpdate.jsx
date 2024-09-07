import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/PatientUpdate.css';

const PatientUpdate = () => {
    const { id } = useParams();

    const [sessions, setSessions] = useState([
        {
            PatientName: '',
            SessionDate: '',
            StudentTherapyName: '',
            Suggestion: '',
            PatientMedication: '',
            ProgressReport: '',
            GoalsAchieved: '',
            NextSteps: '',
            ActivitiesAssigned: '',
            ClinicalRatings: '',
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleSessionUpdate = (index, field, value) => {
        const updatedSessions = [...sessions];
        updatedSessions[index][field] = value;
        setSessions(updatedSessions);
    };

    const handleFormSubmit = async (index) => {
        try {
            const response = await axios.post(`http://localhost:3000/patient/patientupdate/${id}`, {
                ...sessions[index],
            });
            if (response.status === 200) {
                alert('Patient summary updated');
            
            }
        } catch (error) {
            console.error('Error updating patient data:', error);
        }
    };

    const totalPages = Math.ceil(sessions.length / itemsPerPage);
    const paginatedSessions = sessions.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div className="patient-progress-container">
            <h2>Update Patient Summary</h2>
            <div className="form-container">
                {paginatedSessions.map((session, index) => (
                    <form key={index} className="session-form" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(index); }}>
                        <h3>Session {index + 1}</h3>
                        <label>
                            Patient Name:
                            <input 
                                type="text" 
                                value={session.PatientName}
                                onChange={(e) => handleSessionUpdate(index, 'PatientName', e.target.value)}
                            />
                        </label>
                        <label>
                            Session Date:
                            <input 
                                type="date" 
                                value={session.SessionDate}
                                onChange={(e) => handleSessionUpdate(index, 'SessionDate', e.target.value)}
                            />
                        </label>
                        <label>
                            Student Therapy Name:
                            <input 
                                type="text" 
                                value={session.StudentTherapyName}
                                onChange={(e) => handleSessionUpdate(index, 'StudentTherapyName', e.target.value)}
                            />
                        </label>
                        <label>
                            Suggestion:
                            <textarea 
                                value={session.Suggestion}
                                onChange={(e) => handleSessionUpdate(index, 'Suggestion', e.target.value)}
                            />
                        </label>
                        <label>
                            Patient Medication:
                            <input 
                                type="text" 
                                value={session.PatientMedication}
                                onChange={(e) => handleSessionUpdate(index, 'PatientMedication', e.target.value)}
                            />
                        </label>
                        <label>
                            Progress Report:
                            <textarea 
                                value={session.ProgressReport}
                                onChange={(e) => handleSessionUpdate(index, 'ProgressReport', e.target.value)}
                            />
                        </label>
                        <label>
                            Goals Achieved:
                            <input 
                                type="text" 
                                value={session.GoalsAchieved}
                                onChange={(e) => handleSessionUpdate(index, 'GoalsAchieved', e.target.value)}
                            />
                        </label>
                        <label>
                            Next Steps:
                            <textarea 
                                value={session.NextSteps}
                                onChange={(e) => handleSessionUpdate(index, 'NextSteps', e.target.value)}
                            />
                        </label>
                        <label>
                            Activities Assigned:
                            <textarea 
                                value={session.ActivitiesAssigned}
                                onChange={(e) => handleSessionUpdate(index, 'ActivitiesAssigned', e.target.value)}
                            />
                        </label>
                        <label>
                            Clinical Ratings:
                            <input 
                                type="text" 
                                value={session.ClinicalRatings}
                                onChange={(e) => handleSessionUpdate(index, 'ClinicalRatings', e.target.value)}
                            />
                        </label>
                        <div className="form-actions">
                            <button type="submit">Update Session</button>
                        </div>
                    </form>
                ))}
            </div>
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

export default PatientUpdate;
