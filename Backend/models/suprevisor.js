const mongooes=require("mongoose");
const suprevisor=new mongooes.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongooes.model("suprevisor",suprevisor);