const express = require('express')
const users=require('./Data/user')
const app=express();

app.get('/',(req,res)=>{
 res.send("API is running")
})

app.get('/api/users',(req,res)=>{
  res.json(users)
})


app.listen(5000,console.log("server is run at port 5000"))