const asyncHandler=require("express-async-handler")
const User=require("../models/userModel")
const generateToken=require("../utils/generateToken")

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,mobilenumber}=req.body;

    const userExists=await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }
    const user=await User.create({
        name,email,password,mobilenumber
    })
      
        if(user){
            res.status(201).json({
                _id:user._id,
                Name:user.name,
                Email:user.email,
                IsAdmin:user.isAdmin,
                Mobilenumber:user.mobilenumber,
              token:generateToken(user._id)
            })
        }
        else{
            res.status(400)
            throw new Error('Error is occured')
        }
    
    // res.json({name,email});
});



//login

const loginUser=asyncHandler(async(req,res)=>{
    const{email,password}=req.body;

   const user=await User.findOne({email});

   if(user&&(await user.checkPassword(password))){
    res.json({
        _id:user._id,
        Name:user.name,
        Email:user.email,
        IsAdmin:user.isAdmin,
        Mobilenumber:user.mobilenumber,
        token:generateToken(user._id),
    })
   }
   else{
    res.status(400)
    throw new Error('Invaild Email or Password');
}

});

module.exports={registerUser,loginUser}