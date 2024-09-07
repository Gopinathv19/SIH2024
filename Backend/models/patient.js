const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    PatientName: String,
    SessionDate: Date,
    StudentTherapyName: String,
    Suggestion: String,
    PatientMedication: String,
    ProgressReport: String,
    GoalsAchieved: String,
    NextSteps: String,
    ActivitiesAssigned: String,
    ClinicalRatings: Number, // Ensure this is a Number if you only want to store a numeric rating
});


const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    PatientSummary: [sessionSchema], // Correct reference to the schema
});

module.exports = mongoose.model("Patient", patientSchema);
