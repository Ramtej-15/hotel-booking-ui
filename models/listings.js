const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    filename: {
      type: String,
    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/glowing-figure-lying-in-a-circle-of-dark-grass-01wrFzHSWwI",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/glowing-figure-lying-in-a-circle-of-dark-grass-01wrFzHSWwI"
          : v,
    },
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});
const Listing = mongoose.model("Listing", listingschema);
module.exports = Listing;
