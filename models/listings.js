const mongoose = require("mongoose");
const schema = mongoose.Schema;

main()
  .then(() => {
    console.log("connected to dbs");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
}

const listingschema = new schema({
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
});
const Listing = mongoose.model("Listing", listingschema);
module.exports = Listing;
