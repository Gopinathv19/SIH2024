import React, { useState } from 'react';
import { Container, Row, ListGroup, Col, Button, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';  
import { SlCamrecorder } from 'react-icons/sl';  
import { GrWorkshop } from 'react-icons/gr';  
import { MdAutoGraph } from 'react-icons/md';  
import { PiStudentFill } from 'react-icons/pi';  
import { useNavigate } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';
import { RiPsychotherapyFill } from "react-icons/ri";
import profile from "../images/profile.jpg"; // Import the image
import "../style/dash.css";

const Dash = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div className='dash-container'>
      <div className='headiv'>
        <MdMessage className='icon' onClick={() => navigate("/appoinment")} />
        <h2>SPEECH THERAPY SOFTWARE</h2>
        <button className='b1'>Logout</button>
      </div>

      <Button className='menu-button' variant="link" onClick={handleShow}>
        <FaBars size={30} />
      </Button>
      
      <div className='bodydiv'>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Modify</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup style={{ cursor: "pointer" }}>
              <ListGroup.Item onClick={() => navigate('/modifySubject')}>
                <SlCamrecorder size={30} />&nbsp;ZOOM MEET
              </ListGroup.Item>
              <ListGroup.Item onClick={() => navigate('/Publications')}>
                <GiMedicines size={30} />&nbsp;MEDICINE
              </ListGroup.Item>
              <ListGroup.Item onClick={() => navigate('/addactivity')}>
                <GrWorkshop size={30} />&nbsp;ACTIVITY
              </ListGroup.Item>
              <ListGroup.Item onClick={() => navigate('/modifyAwards')}>
                <MdAutoGraph size={30} />&nbsp;IMPROVEMENT
              </ListGroup.Item>
              <ListGroup.Item onClick={() => navigate('/modifyEvents')}>
                <PiStudentFill size={30} />&nbsp;STUDENT THERAPIST
              </ListGroup.Item>
              <ListGroup.Item onClick={() => navigate("/waiting")}>
                <RiPsychotherapyFill size={30} />&nbsp;WAITING PATIENTS
              </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>

        <center>
          <div className='profile-section'>
            <div 
              className='profile-picture' 
              style={{
                backgroundImage: `url(${profile})`, // Use template literals
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100px', // Adjust as needed
                height: '100px', // Adjust as needed
                borderRadius: '50%' // Makes the image circular
              }}
            ></div>
            <h1 className='profile-name'>NAGASURYA T G</h1>
            <h2 className='profile-designation'>M.Ed. in Speech-Language Pathology</h2>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Dash;
