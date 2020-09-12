const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const dotenv = require("dotenv");
app.use(bodyparser.json());

const User = require("./Controllers/user.js");
const Ride = require("./Controllers/ride");
const Android = require("./Controllers/android");

const database = require("./keys/keys").mongoURI;
const port = process.env.port || 3000;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("Database Connected ");
  })
  .catch((err) => {
    console.log("Couldn't Connect to Database " + err);
  });

app.listen(port, () => {
  console.log("Server Is Listening On Port" + port);
});

app.use("/api", User);
app.use("/api", Ride);
app.use("/api", Android);
