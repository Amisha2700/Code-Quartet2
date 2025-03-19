import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from 'dotenv'; 
dotenv.config(); 

const key=process.env.JWT_SECRET;

//REGISTER
export const register=async (req,resp)=>{
    //console.log(req.body);
    try{
        const{
            username,
            emailid,
            password,}=req.body;
        if (!emailid || emailid.trim() === '') {
            return resp.status(400).json({ message: 'Email is required' });
        }
        const existingUser = await User.findOne({ emailid });
        if (existingUser) {
        return resp.status(400).json({ message: "Email already registered" });
    }
        const salt=await bcrypt.genSalt();
        const passwordF=await bcrypt.hash(password, salt);
        const newUser=new User({
            username,
            emailid,
            password:passwordF,
        });
        const saveUser=await newUser.save();
        resp.status(201).json(saveUser);
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
};

//LOGIN
export const login=async(req,resp)=>{
    try{
        const {emailid,password}=req.body;
        const currentUser=await User.findOne({emailid:emailid});
        if(!currentUser){
            return resp.status(404).json({message:"User not found"});
        }
        const boolean=await bcrypt.compare(password,currentUser.password);
        if(!boolean){
            return resp.status(200).json({success: false, message:"Invalid credentials. Please check again!"});
        }
        const token=jwt.sign({emailid:emailid},key);
        console.log(token);
        const userObject = currentUser.toObject(); // we need to convert this to plain object
        delete userObject.password;

        //delete currentUser.password;//this doesn't work

        resp.json({success: true,token,userObject});
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
}
