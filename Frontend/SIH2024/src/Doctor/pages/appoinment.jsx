import React from "react";

const Appointment = () => {
  const cellStyle = {
    border: "1px solid black",
    padding: "15px",

  };

  return (
   <>
     
      <h1 style={{fontWeight:"bold",top:"0px",position:"absolute",backgroundColor:"gray",width:"100vw",textAlign:"center"}}>APPOINMENT LIST</h1>
     
    <center>
      
      <table style={{ border: "1px solid black", marginTop: "0px", position: "absolute", left: "40%" }}>
        <thead>
          <tr>
            <th style={cellStyle} >PATIENT LIST</th>
            <th style={cellStyle} >ACCEPT/REJECT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>NAGASURYA</td>
            <td style={{ padding:"15px", display: "flex", columnGap:"10px" }}>
              <button style={{ backgroundColor: "green", borderRadius: "10%", padding: "5px 10px", color: "white" }}>
                ACCEPT
              </button>
              <button style={{ backgroundColor: "red", borderRadius: "10%", padding: "5px 10px", color: "white" }}>
                REJECT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
   </>
  );
};

export default Appointment;
