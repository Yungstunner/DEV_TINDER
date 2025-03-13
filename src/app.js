const express=require("express");

const app=express();

app.get("/user",(req,res)=>{
 res.send({firstName:"Siddhant",lastName:"Dwivedi"})
});

app.use("/test",(req,res)=>{
  res.send("Testing server")
});


app.listen(7777,()=>{
  console.log("Server is listening at port 7777")
});