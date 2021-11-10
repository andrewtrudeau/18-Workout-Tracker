const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter Exercise Type"
  },
  name: {
    type: String,
    trim: false,
    required: "Enter Exercise Name"
  },
  duration: {
    type: Number,
    required: "Enter an amount of duration"
  },
  weight: {
    type: Number,
    required: "Enter an amount of weight"
  },
  reps: {
    type: Number,
    required: "Enter an amount of reps"
  },
  sets: {
    type: Number,
    required: "Enter an amount of sets"
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
