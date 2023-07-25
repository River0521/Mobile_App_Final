const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true,
  },
  UserName: {
    type: String,
    required: [true, "Please Enter a User Name"],
    unique: true,
  },
  Password: {
    type: String,
    required: [true, "Please Enter a Password"],
  },
  HighestCalories: {
    type: Number,
  },
  HighestDistance: {
    type: Number,
  },
  HighestSteps: {
    type: Number,
  },
  LatestCalories: {
    type: Number,
  },
  LatestDistance: {
    type: Number,
  },
  LatestSteps: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
