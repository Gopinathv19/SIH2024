import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ReviewTherapyPlan.css'; // Import the CSS file

const PatientSummary = () => {
    const { id } = useParams(); // Use useParams to get the patient ID

    // Example data for a specific patient
    const patient = {
        id: id,
        name: 'Jane Smith',
        sessionDate: '2024-08-25',
        doctorName: 'Dr. John Doe',
        doctorSuggestions: 'Continue with the current treatment plan.',
        patientMedication: 'Ibuprofen 200mg daily',
        progressReport: 'Improving steadily',
        treatmentGoals: 'Full recovery in 3 months',
        nextSteps: 'Reassessment in 2 weeks',
        lastSessionSummary: 'Positive response to treatment',
        attachments: ['report1.pdf', 'report2.pdf'],
        clinicalRating: '4/5'
    };

    return (
        <div className="patient-summary-container">
            <h2>Patient Summary</h2>
            <table className="therapy-details-table">
                <tbody>
                    <tr>
                        <td><strong>Patient Name:</strong></td>
                        <td>{patient.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Session Date:</strong></td>
                        <td>{patient.sessionDate}</td>
                    </tr>
                    <tr>
                        <td><strong>Doctor's Name:</strong></td>
                        <td>{patient.doctorName}</td>
                    </tr>
                    <tr>
                        <td><strong>Doctor's Suggestions:</strong></td>
                        <td>{patient.doctorSuggestions}</td>
                    </tr>
                    <tr>
                        <td><strong>Patient Medication:</strong></td>
                        <td>{patient.patientMedication}</td>
                    </tr>
                    <tr>
                        <td><strong>Progress Report:</strong></td>
                        <td>{patient.progressReport}</td>
                    </tr>
                    <tr>
                        <td><strong>Treatment Goals:</strong></td>
                        <td>{patient.treatmentGoals}</td>
                    </tr>
                    <tr>
                        <td><strong>Next Steps:</strong></td>
                        <td>{patient.nextSteps}</td>
                    </tr>
                    <tr>
                        <td><strong>Last Session Summary:</strong></td>
                        <td>{patient.lastSessionSummary}</td>
                    </tr>
                    <tr>
                        <td><strong>Attachments:</strong></td>
                        <td>
                            <ul>
                                {patient.attachments.map((file, index) => (
                                    <li key={index}>
                                        <a href={`#${file}`} download>{file}</a>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Clinical Rating:</strong></td>
                        <td>{patient.clinicalRating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PatientSummary;
