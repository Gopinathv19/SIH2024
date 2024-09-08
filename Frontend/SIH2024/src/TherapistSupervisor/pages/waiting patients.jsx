import React from "react";
import "../style/waiting.css";
import { useNavigate } from "react-router-dom";
const Waiting = () => {
    const navigate=useNavigate();
    return (
        <div style={styles.container}>
            <div style={styles.tableWrapper}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead style={{ backgroundColor: "#f2f2f2"}}>
                        <tr>
                            <th style={styles.header}>PATIENT ID</th>
                            <th style={styles.header}>NAME</th>
                            <th style={styles.header}>AGE</th>
                            <th style={styles.header}>REASON FOR TAKING THERAPY</th>
                            <th style={styles.header}>VIEW DETAILED INFO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.cell}>ps123</td>
                            <td style={styles.cell}>NAGA SURYA</td>
                            <td style={styles.cell}>19</td>
                            <td style={styles.cell}>Language Disorders</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}} >view</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>ps124</td>
                            <td style={styles.cell}>SAMEERA</td>
                            <td style={styles.cell}>25</td>
                            <td style={styles.cell}>Speech Disorders</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}}>view</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>ps125</td>
                            <td style={styles.cell}>ARUN</td>
                            <td style={styles.cell}>30</td>
                            <td style={styles.cell}>Cognitive-Communication Disorders</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}}>view</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>ps126</td>
                            <td style={styles.cell}>SNEHA</td>
                            <td style={styles.cell}>22</td>
                            <td style={styles.cell}>Swallowing Disorders</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}}>view</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>ps127</td>
                            <td style={styles.cell}>ROHIT</td>
                            <td style={styles.cell}>28</td>
                            <td style={styles.cell}>Autism Spectrum Disorders</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}}>view</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.cell}>ps128</td>
                            <td style={styles.cell}>PRIYA</td>
                            <td style={styles.cell}>35</td>
                            <td style={styles.cell}>Hearing Impairments</td>
                            <td style={styles.cell}>
                                <button style={styles.button} onClick={()=>{navigate("/detailedinfo")}}>view</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width:"100vw",
   
    },
    tableWrapper: {
        overflowX: "auto",
        padding: "10px",
        backgroundColor: "white", // Optional: a background color for the table area
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: shadow for better visibility
        borderRadius: "5px", // Optional: rounded corners for the table area
    },
    header: {
        padding: "12px 15px",
        textAlign: "left",
        fontSize: "14px",
        borderBottom: "1px solid #ddd",
    },
    cell: {
        padding: "10px 15px",
        textAlign: "left",
        fontSize: "14px",
        borderBottom: "1px solid #ddd",
    },
    button: {
        backgroundColor: "orange",
        padding: "5px 10px",
        border: "none",
        color: "white",
        cursor: "pointer",
        borderRadius: "3px",
    },
};

export default Waiting;
