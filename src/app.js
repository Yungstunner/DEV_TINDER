const express=require("express");
const connectDB=require("./config/database")
const app= express();
const User = require("./models/user");
app.use(express.json());//Middleware which reads json data and converts to javascript data

app.post("/signup",async(req ,res)=>{
  //Create new instance of user model
  const user=new User(req.body);
  try{
     await user.save();
     res.send("User added successfully")
  }catch(err){
     res.status(404).send("Erorr saving the user:"+err.message);
  }
   
    // const userObj={
    //   firstName:"Siddhant",
    //   lastName:"Dwivedi",
    //   emailId:"sid@gmail.com",
    //   password:"12345"
    // }
    // //Creating a new instance of user model
    // const user= new User(userObj);
    // await user.save();
    // res.send("User added successfully"); 
});

connectDB()
.then(()=>{
  console.log("Databse connected successfully")
  app.listen(7777,()=>{
    console.log("Server is listening at port 7777");
   }); 
})
.catch((err)=>{
  console.error("Databse cannot be connected")
});


