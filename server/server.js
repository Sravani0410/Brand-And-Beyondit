const express = require('express')
const users=require('./Data/user')
const dotenv=require('dotenv')
const connect=require("./config/db")
const  userRoutes=require('./routes/userRoutes')

const app=express();
dotenv.config()
app.use(express.json());

app.get('/',(req,res)=>{
 res.send("API is running")
})

app.get('/users',(req,res)=>{
  res.json(users)
})

app.get('/users/:id',(req,res)=>{
   const user=users.find((n) => n._id == req.params.id);
   //console.log(req.params)
   //console.log(user)
   res.send(user)
});

app.use('/users',userRoutes)

const PORT=process.env.PORT||6000


app.listen(PORT,async()=>{
  try{
    await connect;
    console.log(`server is run at port ${PORT}`)
  }
  catch(err){
    console.log(err.message)
  }
})