const express = require("express");
const bcrypt = require("bcrypt");
const authschema = require("../models/authentication");
const route = express.Router();
const patientDetails=require("../models/patient");
 


route.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await authschema.findOne({ email }); 
        if (user) {
            return res.status(400).send("User already exists");
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new authschema({ name, email, password: hashedPassword });
        await newuser.save();
        res.status(201).send("Registered successfully");
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// Login route
route.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authschema.findOne({ email }); 
        if (!user) {
            return res.status(404).send("User not found");
        }

      
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid password");
        }

        res.status(200).send("Login successful");
    } catch (err) {
        res.status(500).send("Server error");
    }
});


route.get("/report/:id",async(req,res)=>{
const{id}=req.params;
try{
const PatientReport=await patientDetails.findById(id).select('PatientSummary');
if(!PatientReport){
    res.status("404").send("Patient-Report Not found");
}
res.send(PatientReport.PatientSummary);
}catch(error){
res.status("500").send("An error occured while fetching the patient detail")
}
})

module.exports = route;
