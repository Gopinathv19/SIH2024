const express = require('express');
const route = express.Router();
const Patient = require('../models/patient');

// Route to get all patient details
route.get('/patients-details', async (req, res) => {
    try {
        const patients = await Patient.find().exec(); // Fetch all patients
        res.status(200).json(patients); // Send patient data as response
    } catch (error) {
        console.error('Error fetching patient data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = route;
