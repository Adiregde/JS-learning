import User from "../model/user";
import bcrpyt

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({ message: "NO user found"});
    }
    return res.status(200).json({users});
};

export const signup = async(req, res,next) =>{
    const {name,email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log(error);
    }
    if(existingUser){
        return res.status(400).json({ messaage: "User Already exists! Login INsted"});
    }
    const user = new user({
        name,
        email,
        password
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({user});
};


const login = async(req,res,next)=>{
    const {name,email,password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log(error);
    }
    if(!existingUser){
        return res.status(404).json({ messaage: "User not found by this email"});
    }

    const isPasswordCorrect = bcrpyt.com
}