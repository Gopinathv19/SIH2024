const mongooes=require("mongoose");
const PatientSummary=new mongooes.Schema({
     PatientName:String,
     SessionDate:Date,
     StudentTherapyName:String,
     Suggestion:String,
     PatientMedication:String,
     ProgressReport:String,
     GoalsAchieved:String,
     NextSteps:String,
     ActivitiesAssigned:String,
     ClinicalRatings:Number
})
module.exports=mongooes.model("PatientSummary",PatientSummary);