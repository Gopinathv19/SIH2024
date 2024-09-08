import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Patient Components
import PatientAuthPage from "./Patient/components/auth";
import LandingPage from "./Patient/components/landing";
import AppointmentForm from "./Patient/components/appointment";
import PatientSummary from "./StudentTherapist/pages/Component/PatientSummary";
import PatientUpdate from "./StudentTherapist/pages/Component/PatientStatusUpdate";
import PatientDetail from "./StudentTherapist/pages/Component/ViewSummary";
import PatientReport from "./StudentTherapist/pages/Component/PatientReport";

// StudentTherapist Components
import RoleSelection from "./authbutton";
import AllocationRequests from "./StudentTherapist/pages/Component/AllocationRequests";
import Profile from "./StudentTherapist/pages/Component/StudentTherapistProfile";
import Logout from "./StudentTherapist/pages/Component/Logout";
import UpdateProfile from "./StudentTherapist/pages/Component/UpdateProfile";
import PatientFeedback from "./StudentTherapist/pages/Component/PatientFeedback";
import ReviewTherapyPlan from "./StudentTherapist/pages/Component/ReviewTherapyPlan";
import SupervisorResources from "./StudentTherapist/pages/Component/SupervisorResources";
import ProgressSummary from "./StudentTherapist/pages/Component/PatientStatusUpdate";
import Dashboard from "./StudentTherapist/pages/Component/Dashboard";
import Pending from "./StudentTherapist/pages/Component/PatientPendingRequests";
import StudentTherapistReport from "./TherapistSupervisor/pages/StudentTherapistReport";

// TherapistSupervisor Components
import AuthPage from "./TherapistSupervisor/pages/auth";
import SupervisorAuthPage from "./StudentTherapist/pages/Component/auth";
import Dboard from "./TherapistSupervisor/component/therapistSupervisorDash";
import PatientReportList from "./TherapistSupervisor/pages/StudentTherapistNotification";

// Import the Notification component if it exists
// import Notification from "./path/to/Notification";

function App() {
  return (
    <Router>
      <Routes>
        {/* Patient Routes */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/patientauth" element={<PatientAuthPage />} />
        <Route path="/patientdash" element={<LandingPage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/patient/:id" element={<PatientSummary />} />
        <Route path="/PatientUpdate/:id" element={<PatientUpdate />} />
        <Route path="/summary/:id" element={<PatientDetail />} />
        <Route path="/patientreport" element={<PatientReport />} />
        <Route path="/sendingtodoctor/:id" element={<PatientReport />} />

        {/* StudentTherapist Routes */}
        <Route path="/allocation-requests" element={<AllocationRequests />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/monitor-progress" element={<PatientSummary />} />
        <Route path="/patient-feedback" element={<PatientFeedback />} />
        <Route path="/review-plans" element={<ReviewTherapyPlan />} />
        <Route path="/training-resources" element={<SupervisorResources />} />
        <Route path="/progress-summary" element={<ProgressSummary />} />
        <Route path="/supervisordash" element={<Dashboard />} />
        <Route path="/pending-requests" element={<Pending />} />
        <Route path="/pendingrequest" element={<Pending />} />
        <Route path="/StudentTherapistReport/:id" element={<StudentTherapistReport />} />
        <Route path="/StudentTherapistReport" element={<PatientReportList/>} />

        {/* TherapistSupervisor Routes */}
        <Route path="/doctorauth" element={<AuthPage />} />
        <Route path="/suprevisorauth" element={<SupervisorAuthPage />} />
        <Route path="/doctordash" element={<Dboard />} />

        {/* Optional Route */}
        {/* <Route path="/notifications" element={<Notification />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
