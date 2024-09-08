import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const StudentTherapistReport=()=>{

const {id} =useParams();
const [sessions , setSessions] =useState([]);
const [loading , setLoading]=useState(true);
const [error,setError]=useState(null);

useEffect(()=>{
    const fetchPatientDetail=async()=>{
        try{
            const response=await axios.get(`http://localhost:3000/doctor/report/${id}`)
            setSessions(response.data);
            setLoading(false);
        }catch(err){
            setError('Error fetching patient detail');
            setLoading(false);
        }
    };
    fetchPatientDetail();
},[id]);

if(loading) return <p>Loading</p>
if(error) return <p>{error}</p>


return (
    <div className="patient-detail-container">
        <h2>Patient Summary</h2>
        {sessions.length > 0 ? (
            sessions.map((session, index) => (
                <div key={index} className="session-detail">
                    <h3>Session {index + 1}</h3>
                    <p><strong>Patient Name:</strong> {session.PatientName}</p>
                    <p><strong>Session Date:</strong> {new Date(session.SessionDate).toLocaleDateString()}</p>
                    <p><strong>Student Therapy Name:</strong> {session.StudentTherapyName}</p>
                    <p><strong>Suggestion:</strong> {session.Suggestion}</p>
                    <p><strong>Patient Medication:</strong> {session.PatientMedication}</p>
                    <p><strong>Progress Report:</strong> {session.ProgressReport}</p>
                    <p><strong>Goals Achieved:</strong> {session.GoalsAchieved}</p>
                    <p><strong>Next Steps:</strong> {session.NextSteps}</p>
                    <p><strong>Activities Assigned:</strong> {session.ActivitiesAssigned}</p>
                    <p><strong>Clinical Ratings:</strong> {session.ClinicalRatings}</p>
                     
                </div>
            ))
        ) : (
            <p>No sessions found</p>
        )}
    </div>
);

};
export default StudentTherapistReport;