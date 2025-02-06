const express=require("express");


const connectDB=require("./config/database")
const app= express();
const User = require("./models/user");

app.post("/signup",async(req,res)=>{
    const userObj={
      firstName:"Siddhant",
      lastName:"Dwivedi",
      emailId:"sid@gmail.com",
      password:"12345"
    }
    //Creating a new instance of user model
    const user= new User(userObj);
    await user.save();
    res.send("User added successfully"); 
});

connectDB()
.then(()=>{
  console.log("Databse co nnected successfully")
  app.listen(7777,()=>{
    console.log("Server is listening at port 7777");
   }); 
})
.catch((err)=>{
  console.error("Databse cannot be connected")
});


