const registerUser=async(req,res)=>{
    const {name,email,password,mobilenumber}=req.body
    res.json({name,email});
};
module.exports=registerUser