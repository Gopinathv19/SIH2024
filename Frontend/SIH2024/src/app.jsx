import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./supervisor/pages/Component/home";
import Doctors from "./supervisor/pages/Component/Doctor";
import AllocationRequests from "./supervisor/pages/Component/AllocationRequests";
import Profile from "./supervisor/pages/Component/Profile";
import Logout from "./supervisor/pages/Component/Logout";
import Patient from "./supervisor/pages/Component/patient";
import UpdateProfile from "./supervisor/pages/Component/UpdateProfile";
import MonitorPatientProgress from "./supervisor/pages/Component/MonitorPatientProgress";
import PatientFeedback from "./supervisor/pages/Component/PatientFeedback";
import ReviewTherapyPlan from "./supervisor/pages/Component/ReviewTherapyPlan";
import PatientSummary from "./supervisor/pages/Component/PatientSummary";
import SupervisorResources from "./supervisor/pages/Component/SupervisorResources";
import PendingAllocationRequests from "./supervisor/pages/Component/PendingAllocation";
import AuthPage from "./Doctor/pages/auth";
import PatientAuthPage from "./Patient/components/auth";
import SupervisorAuthPage from "./supervisor/pages/Component/auth";
import RoleSelection from "./authbutton";
import ProgressSummary from "./supervisor/pages/Component/PatientUpdate";
import LandingPage from "./Patient/components/landing";
import Dashboard from "./supervisor/pages/Component/dashboard";
import Dboard from "./Doctor/component/doctordash";
import AppointmentForm from "./Patient/components/appointment";
import Pending from "./supervisor/pages/Component/pendingrequests";
import PatientUpdate from "./supervisor/pages/Component/PatientUpdate";
import PatientDetail from "./supervisor/pages/Component/viewSummary";
// Import the Notification component if it exists
// import Notification from "./path/to/Notification";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/doctorauth" element={<AuthPage />} />
        <Route path="/suprevisorauth" element={<SupervisorAuthPage />} />
        <Route path="/patient/:id" component={<PatientSummary/>} />
        <Route path="/patientauth" element={<PatientAuthPage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/allocation-requests" element={<AllocationRequests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/monitor-progress" element={<MonitorPatientProgress />} />
        <Route path="/patient-feedback" element={<PatientFeedback />} />
        <Route path="/review-plans" element={<ReviewTherapyPlan />} />
        <Route path="/patient-summary" element={<PatientSummary />} />
        <Route path="/training-resources" element={<SupervisorResources />} />
        <Route path="/progress-summary" element={<ProgressSummary />} />
        <Route path="/patientdash" element={<LandingPage />} />
        <Route path="/supervisordash" element={<Dashboard/>} />
        <Route path="/doctordash" element={<Dboard/>}/>
        <Route path="/pending-requests" element={<PendingAllocationRequests />} />
        <Route path="/appoinment" element={<AppointmentForm/>}/>
        <Route path="/pendingrequest" element={<Pending/>}/>
        <Route path="/PatientUpdate/:id" element={<PatientUpdate />} />
       <Route path="/patient-summary" element={<PatientSummary/>}/>
       <Route path="/summary/:id" element={<PatientDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
