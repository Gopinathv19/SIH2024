const mongooes=require("mongoose");
const authschema=new mongooes.Schema({
    name:String,
    email:String,
    password:String
})
module.exports=mongooes.model("authentication",authschema);