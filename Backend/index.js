const express = require("express");
const cors=require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const patient=require("./route/patient_route");
const doctor=require("./route/doctor_route");
const suprevisor=require("./route/suprevisor_route");
const appoinment=require(".//");
const port = 3000;
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/SIH2024")

    .then(() => {
        console.log(`Database connected to the port ${port}`);
    })
    .catch((err) => {
        console.error("Connection error", err);
    });
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
app.use("/patient/",patient);
app.use("/doctor/",doctor);
app.use("/suprevisor/",suprevisor);