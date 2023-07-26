const express = require("express");
const mongoose = require("mongoose");
const User = require("./DataBase/Models/Model");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://app:App123@mobile-app-final.m6dazon.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node Api app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
require("./DataBase/Models/Model");

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getUser/Login", async (req, res) => {
  try {
    const { user, pass } = req.params;
    console.log(req.params);
    const CheckUser = await User.findOne({
      UserName: user,
      Password: pass,
    }).exec();
    console.log(CheckUser);
    res.status(200).json(CheckUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getUser/User", async (req, res) => {
  try {
    const { user } = req.params;
    console.log(req.params);
    const CheckUser = await User.findOne({ Login: user }).exec();
    console.log(CheckUser);
    res.status(200).json(CheckUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/leaderboard", async (req, res) => {
  try {
    const leader = await User.find().sort({ HighestSteps: -1 }).limit(50);
    //console.log(leader);
    res.status(200).json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/upd/", async (req, res) => {
  try {
    const leader = await User.find().sort({ HighestSteps: -1 }).limit(50);
    //console.log(leader);
    res.status(200).json(leader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
