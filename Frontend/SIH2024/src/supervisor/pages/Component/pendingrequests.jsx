import axios from "axios";
import React, { useEffect, useState } from "react";

const Pending = () => {
    const [datas, setData] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const result = await axios.get("http://localhost:3000/patient/getappoinment");
                if (result.status === 200) {
                    setData(result.data);
                } else {
                    alert(result.data);
                }
            } catch (error) {
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('An unexpected error occurred');
                }
            }
        };
        fetchAppointments();
    }, []);

    const viewDetails = (data) => {
        setSelectedAppointment(data);
    };

    return (
        <div style={{ padding: "20px" }}>
            {selectedAppointment ? (
                <div style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                }}>
                    <div style={{
                        width: "500px",
                        height: "auto",
                        padding: "20px",
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                    }}>
                        <h3>
                            Name: {selectedAppointment.firstName} {selectedAppointment.lastName}
                        </h3>
                        <h4>Date: {selectedAppointment.date} & Time: {selectedAppointment.time}</h4>
                        <h5>Phone Number: {selectedAppointment.phone}</h5>
                        <p><b>Reason for Therapy:</b> {selectedAppointment.reason}</p>
                        <button onClick={() => setSelectedAppointment(null)} style={{
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}>Back to List</button>
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex",justifyContent:"space-around", gap: "10px" }}>
                    {datas.length === 0 ? (
                        <p>No appointments found.</p>
                    ) : (
                        datas.map((data) => (
                            <div key={data._id} style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                width:"450px",
                                height:"auto",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                backgroundColor: "#fff",
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                            }}>
                                <div style={{ flex: 1}}>
                                    <h2 style={{marginTop:"10px"}}>{data.firstName} {data.lastName}</h2>
                                </div>
                                <button onClick={() => viewDetails(data)} style={{
                                    padding: "10px 20px",
                                    border: "none",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}>View Details</button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Pending;
