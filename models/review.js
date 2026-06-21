const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
