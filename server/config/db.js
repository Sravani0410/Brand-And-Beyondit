const mongoose=require('mongoose')
const dotenv =require('dotenv').config();

//dotenv.config();

//console.log(dotenv.parsed)

const connect=mongoose.connect(process.env.MongoDB_URI,{
    useNewUrlParser:true,
     
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log(`no connection`));

module.exports=connect