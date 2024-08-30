import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/detailed.css"
const Detailed = () => {
  const navigate = useNavigate();
  const [acc, setAcc] = useState(false); // Toggle state for showing the session dropdown
  const [selectedSession, setSelectedSession] = useState(""); // Store the selected session
  const [error, setError] = useState(""); // Error message if the session is already taken
  const [allocatedSessions, setAllocatedSessions] = useState([]); // To track allocated sessions

  const touch = () => {
    setAcc(!acc);
  };

  const handleSessionChange = (e) => {
    const session = e.target.value;

    if (sessionIsSelected(session)) {
      setError("This session is already selected.");
    } else {
      setSelectedSession(session);
      setError(""); // Clear error if session is available
    }
  };

  const sessionIsSelected = (session) => {
    return allocatedSessions.includes(session);
  };

  const allocateSession = () => {
    if (selectedSession && !sessionIsSelected(selectedSession)) {
      setAllocatedSessions([...allocatedSessions, selectedSession]);
      alert(`Session ${selectedSession} has been allocated.`);
    } else {
      setError("Please select an available session.");
    }
  };

  return (
    <>
      <center>
      <div className="container">
        <div className="pdf-content">PDF Content</div>
        <div className="action-bar">
            <button className="sub">submit</button>
          <button className="btn accept-btn" onClick={touch}>ACCEPT</button>
          {acc && (
            <div className="session-selector">
              <select className="select-session" value={selectedSession} onChange={handleSessionChange}>
                <option value="">--session--</option>
                <option value="session 1">session 1</option>
                <option value="session 2">session 2</option>
                <option value="session 3">session 3</option>
                <option value="session 4">session 4</option>
                <option value="session 5">session 5</option>
                <option value="session 6">session 6</option>
                <option value="session 7">session 7</option>
                <option value="session 8">session 8</option>
                <option value="session 9">session 9</option>
                <option value="session 10">session 10</option>
              </select>
              {error && <p className="error-message">{error}</p>}
              <button className="btn allocate-btn" onClick={allocateSession}>Allocate Session</button>
            </div>
          )}
          <button className="btn reject-btn" onClick={() => navigate("/reject-form")}>REJECT</button>
        </div>
      </div>
      </center>
    </>
  );
};

export default Detailed;
