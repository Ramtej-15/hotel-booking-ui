const Listing = require("../models/listings");
const initData = require("./data.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
  .then(() => {
    console.log("connected to dbs");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
}
db.getCollectionNames().forEach(function (collection) {
  db[collection].drop();
});
