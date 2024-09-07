const express = require("express");
const bcrypt = require("bcrypt");
const patient = require("../models/patient");
const route = express.Router();
const appoinment=require("../models/appoinment");

route.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await patient.findOne({ email }); 
        if (user) {
            return res.status(400).send("User already exists");
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new patient({ name, email, password: hashedPassword });
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
        const user = await patient.findOne({ email }); 
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
route.post("/postappoinment",async(req,res)=>{
    const { firstName, lastName, date, time, reason,phone, email } = req.body;

    try{
      const add=new appoinment({
        firstName,
        lastName,
        date,
        time,
        reason,
        phone,
        email
      })
      await add.save();
      res.send("appointment submitted");
    }catch(err){
        res.status(500).send("sever error");
    }
});
route.get("/getappoinment",async(req,res)=>{
    
    try{
       const check=await appoinment.find();
        if(!check){
            res.status(201).send("NO DATA FOUND");
        }
        res.status(200).send(check);
    }catch(err){
        res.status(500).send("sever error");
    }
});
route.get('/patients-details', async (req, res) => {
    try {
        const patients = await patient.find();
        if (!patients || patients.length === 0) {
            return res.status(404).send("No patients found");
        }
        res.status(200).send(patients); // Return patients as JSON
    } catch (error) {
        res.status(500).send("An error occurred while fetching patient details");
    }
});



// Route to get particular patient summary by ID
route.get('/particular-patients-details/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Find the patient by ID and project only the PatientSummary field
        const patients = await patient.findById(id).select('PatientSummary');
        if (!patients) {
            return res.status(404).send("No patient found");
        }
        res.status(200).send(patients.PatientSummary); // Return only the PatientSummary field
    } catch (error) {
        res.status(500).send("An error occurred while fetching patient details");
    }
});

module.exports = route;




// Define your route
route.post('/patientupdate/:id', async (req, res) => {
    const { id } = req.params;
    const {
        PatientName,
        SessionDate,
        StudentTherapyName,
        Suggestion,
        PatientMedication,
        ProgressReport,
        GoalsAchieved,
        NextSteps,
        ActivitiesAssigned,
        ClinicalRatings,
    } = req.body;

    try {
        const updateSummary = {
            PatientName,
            SessionDate,
            StudentTherapyName,
            Suggestion,
            PatientMedication,
            ProgressReport,
            GoalsAchieved,
            NextSteps,
            ActivitiesAssigned,
            ClinicalRatings,
        };

        const patients = await patient.findByIdAndUpdate(
            id,
            { $push: { PatientSummary: updateSummary } },
            { new: true }
        );

        if (!patients) {
            return res.status(404).send('Patient not found');
        }

        res.status(200).send('Patient summary updated successfully');
    } catch (error) {
        console.error('Error updating patient summary:', error);
        res.status(500).send('Internal server error');
    }
});


module.exports = route;
