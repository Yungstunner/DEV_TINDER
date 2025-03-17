const express = require("express");
const adminAuth = require("./middleware/auth");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res)=>{
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Error saving user");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is listening at port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected", err);
  });
