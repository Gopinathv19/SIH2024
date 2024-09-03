const mongoose=require("mongoose");
const appoinment=new mongoose.Schema({
    firstName:String,
    lastName:String,
    date:Date,
    time:String,
    reason:String,
    phone:Number,
    email:String

})
module.exports=mongoose.model("appoinment",appoinment);