const express=require("express");

const app= express();

app.use("/test",(req,res)=>{
  res.send("Welcome to nodejs")
});

app.listen(7777,()=>{
 console.log("Server is listening at port 7777");
});