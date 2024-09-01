import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Select Your Role</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/patientauth')} style={styles.button}>Patient</button>
        <button onClick={() => navigate('/suprevisorauth')} style={styles.button}>Supervisor</button>
        <button onClick={() => navigate('/doctorauth')} style={styles.button}>Doctor</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default RoleSelection;