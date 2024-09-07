import React from "react";
import "../Style/Dashboard.css"; // Import CSS for Dashboard
import { Link } from "react-router-dom";
import Navbar from "./home";

const Dashboard = () => {
  return (
  <div>
      <Navbar/>
    <div className="dashboard">
      <img
        src="path_to_supervisor_image.jpg"
        alt="Supervisor"
        className="supervisor-image"
      />

      <ul className="dashboard-links">
        <li>
          <Link to="/update-profile">Update Profile</Link>
        </li>

        <li>
          <Link to="/manage-allocations">Manage Patient Allocations</Link>
        </li>
        <li>
          <Link to="/pending-requests">Pending Allocation Requests</Link>
        </li>
        <li>
          <Link to="/review-plans">Review Therapy Plans</Link>
        </li>
        <li>
          <Link to="/monitor-progress">Monitor Patient Progress</Link>
        </li>
        <li>
          <Link to="/patient-feedback">Patient Feedback</Link>
        </li>
        <li>
          <Link to="/therapist-communication">Therapist Communication</Link>
        </li>

        <li>
          <Link to="/training-resources">Training and Resources</Link>
        </li>
        <li>
          <Link to="/patients">Patient-List</Link>
        </li>
        <li>
          <Link to="/patientreport">Report to Doctor</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Dashboard;
