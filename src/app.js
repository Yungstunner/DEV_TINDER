const express=require("express");
const adminAuth=require("./middleware/auth")
const app=express();

//Handle authmiddleware for all requests GET,POST,PATCH,DELETE
app.use("/admin",adminAuth);

app.get("/admin/getAlldata",(req,res)=>{
   res.send("All data sent")
});
app.get("/admin/delete",(req,res)=>{
  res.send("Data deleted successfully")
});

app.listen(7777,()=>{
  console.log("Server is listening at port 7777")
});