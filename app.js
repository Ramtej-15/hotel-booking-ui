const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listings");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");

main()
  .then(() => {
    console.log("connected to dbs");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wonderlust");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsmate);
app.use(express.static(path.join(__dirname, "/public")));

//index route
app.get("/listing", async (req, res) => {
  let AllListings = await Listing.find({});
  res.render("listings/index.ejs", { AllListings });
});

//create route
app.get("/listing/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.post("/listing", async (req, res) => {
  const newlisting = new Listing(req.body.listing);
  await newlisting.save();
  res.redirect("/listing");
});

//edit route
app.get("/listing/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listing/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect(`/listing/${id}`);
});

// destroy route
app.delete("/listing/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});
//show route
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

app.get("/", (req, res) => {
  console.log("main page");
  res.send("welcome");
});

app.listen(8080, () => {
  console.log("listing");
});
