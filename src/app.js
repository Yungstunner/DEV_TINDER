const express=require("express");

const app= express();

app.get("/user",(req,res)=>{
  res.send("User data sent successfully");
})
app.post("/signup",(req,res)=>{
  res.send("User registered successfully");
})

app.use("/test",(req,res)=>{
  res.send("Welcome to nodejs")
});

app.listen(7777,()=>{
 console.log("Server is listening at port 7777");
});