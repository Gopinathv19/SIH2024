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
module.exports = route;
