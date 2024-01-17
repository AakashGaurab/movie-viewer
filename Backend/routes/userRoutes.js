const express= require("express");

const user = express.Router();
const {user_model} = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

user.post("/signup",async(req,res)=>{
    let payload = req.body;
    let {name,email,password}=payload;
    bcrypt.hash(password,Number(process.env.num),async(err,hash)=>{       // hashing password 
        if (err){
            res.status(500).json({"msg":"Problem Encrypting password"});
        }
        else {
            await user_model.insertMany([{name,email,password:hash}]);   // saving user to db
            res.status(200).json({"msg":"User Created"});
        }
    })

})

user.post("/login",async(req,res)=>{
    let payload = req.body;
    let {email,password}=payload;
    try {
        let data = await user_model.find({email:email});
        let match = await bcrypt.compare(password,data[0].password)   // comparing password;
        if (match){
            let token = jwt.sign({email:email},process.env.key)
            res.status(200).json({"msg":"Login Succesful",token:token});
        }
        else {
            res.status(404).json({"msg":"wrong Credentials"});
        }
    } catch (error) {
        res.status(500).json({"msg":error});
    }
    
})

module.exports={user};