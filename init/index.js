const Listing = require("../models/listings");
const initData = require("./data.js");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// main()
//   .then(() => {
//     console.log("connected to dbs");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
// }
const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data saved ");
};
initDb();
