import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css'; // Import the CSS file

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection-container">
      <div className="role-selection-card">
        <h2 className="role-selection-heading">Select Your Role</h2>
        <div className="role-selection-button-container">
          <button onClick={() => navigate('/patientauth')} className="role-selection-button">Patient</button>
          <button onClick={() => navigate('/suprevisorauth')} className="role-selection-button">Supervisor</button>
          <button onClick={() => navigate('/doctorauth')} className="role-selection-button">Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
