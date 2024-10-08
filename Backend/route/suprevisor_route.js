const express = require("express");
const bcrypt = require("bcrypt");
const suprevisor = require("../models/suprevisor");
const route = express.Router();


route.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await suprevisor.findOne({ email }); 
        if (user) {
            return res.status(400).send("User already exists");
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new suprevisor({ name, email, password: hashedPassword });
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
        const user = await suprevisor.findOne({ email }); 
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

module.exports = route;
