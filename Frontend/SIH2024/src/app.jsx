import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./supervisor/pages/Component/home";
import Dashboard from "./supervisor/pages/Component/dashboard";
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
import ProgressSummary from "./supervisor/pages/Component/ProgressSummary";
import AuthPage from "./Doctor/pages/auth";
import PatientAuthPage from "./Patient/components/auth";
import SuprevisorAuthPage from "./supervisor/pages/Component/auth";
import RoleSelection from "./authbutton";
import Dash from "./Doctor/component/dashboard";
import LandingPage from "./Patient/components/landing";
import Header from "./Patient/components/header";
import Sidebar from "./Patient/components/sidebar";
function App() {
  return (
    <Router>
      {/* 
   <div className='headerapp'>
             <Header sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
             </div>    
             <div className="main-content">
                {sidebarVisible && <Sidebar />}
                </div> */}
               <Routes>
       
        <Route path="/" element={<RoleSelection/>}/>
        <Route path="/doctorauth" element={<AuthPage/>}/>
        <Route path="/suprevisorauth" element={<SuprevisorAuthPage/>}/>
        <Route path="/patientauth" element={<PatientAuthPage/>}/>
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
        <Route path="/patientdash" element={<LandingPage/>}/>
        <Route path="/doctordash" element={<Dash/>} />
        <Route path="/suprevisordash" element={<Dashboard/>}/>
        <Route
          path="/pending-requests"
          element={<PendingAllocationRequests />}
        />
      </Routes>
    </Router>
  );
}

export default App;
