const mongooes=require("mongoose");
const patient=new mongooes.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongooes.model("patient",patient);