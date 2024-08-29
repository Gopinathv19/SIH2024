import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './supervisor/pages/Component/home';  
import Dashboard from './supervisor/pages/Component/dashboard';
import Doctors from './supervisor/pages/Component/Doctor';
import AllocationRequests from './supervisor/pages/Component/AllocationRequests';
import ManageAllocations from './supervisor/pages/Component/ManageAllocations';
import Notifications from './supervisor/pages/Component/Notification';
import Profile from './supervisor/pages/Component/Profile';
import Logout from './supervisor/pages/Component/Logout';
import Patient from './supervisor/pages/Component/patient';
import UpdateProfile from './supervisor/pages/Component/UpdateProfile';
import MonitorPatientProgress from './supervisor/pages/Component/MonitorPatientprogress';
import PatientFeedback from './supervisor/pages/Component/PatientFeedBack';
import ReviewTherapyPlan from './supervisor/pages/Component/ReviewTherapyPlan';
import PatientSummary from './supervisor/pages/Component/PatientSummary';
import SupervisorResources from './supervisor/pages/Component/SupervisorResources';
import PendingAllocationRequests from './supervisor/pages/Component/PendingAllocation';

const App = () => {
    // State for notifications
    const [pendingNotifications, setPendingNotifications] = useState([]);
    const [manageNotifications, setManageNotifications] = useState([]);

    // Handlers for managing notifications
    const handlePendingAllocation = (message) => {
        setPendingNotifications((prev) => [...prev, message]);
    };

    const handleManageAllocation = (message) => {
        setManageNotifications((prev) => [...prev, message]);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients" element={<Patient />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/allocation-requests" element={<AllocationRequests />} />
                <Route 
                    path="/manage-allocations" 
                    element={<ManageAllocations notifications={manageNotifications} />}
                />
                <Route 
                    path="/notifications" 
                    element={
                        <Notifications 
                            onPendingAllocation={handlePendingAllocation}
                            onManageAllocation={handleManageAllocation}
                        />
                    }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/monitor-progress" element={<MonitorPatientProgress />} />
                <Route path="/patient-feedback" element={<PatientFeedback />} />
                <Route path="/review-plans" element={<ReviewTherapyPlan />} />
                <Route path="/patient-summary" element={<PatientSummary />} />
                <Route path="/training-resources" element={<SupervisorResources />} />
                <Route 
                    path="/pending-requests" 
                    element={<PendingAllocationRequests notifications={pendingNotifications} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
