const mongooes=require("mongoose");
const appoinment=new mongooes.Schema({
    firstname:String,
    lastname:String,
    date:Date,
    time:String,
    reason:String,
    phn:Number,
    email:String

})
const patient=new mongooes.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongooes.model("patient",patient);