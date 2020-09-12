const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const verifyToken = require("../Middlewares/Verification/auth");
const jwt = require("jsonwebtoken");

const Ride = require("../Models/Ride");
const User = require("../Models/User");

router.post("/addvehicle", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      return res.status(400).json({ message: err });
    } else {
      console.log("Successful Token");
    }
  });
  const rideDetails = new Ride({
    owner: req.body.owner,
    name: req.body.name,
    number: req.body.number,
    modelno: req.body.modelno,
    colour: req.body.colour,
    mileage: req.body.mileage,
    income: req.body.income,
    seats: req.body.seats,
    about: req.body.about,
    driver: req.body.driver,
  });
  rideDetails
    .save()
    .then((data) => {
      res.status(200).json({
        message: "Sucessfull",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        message: err,
      });
    });
});

//Super Admin Vehicle Data

router.post("/getvehicles", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  Ride.find()
    .select("name modelno about")
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

router.post("/deletevehicle", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  Ride.findOneAndDelete({ _id: req.body.id })
    .then((data) => {
      res.status(200).json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

router.post("/updatevehicle", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  Ride.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      owner: req.body.owner,
      driver: req.body.driver,
      name: req.body.name,
      modelno: req.body.model,
      colour: req.body.colour,
      mileage: req.body.mileage,
      seats: req.body.seats,
      about: req.body.about,
      income: req.body.income,
    }
  )
    .then((data) => {
      res.status(200).json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

//Admin Vehicle Record Complete

router.post("/showvehiclerecord", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  Ride.findOne({
    owner: req.body.id,
  })
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

//Driver Details Admin

router.post("/getdriverdetails", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  Ride.findOne({
    _id: req.body.id,
  })
    .select("name")
    .populate("driver", "name email contact address reviews")
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

//Driver Detail Super Admin

router.post("/showdrivers", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  User.find({ role: "driver" })
    .select("name contact driverdetails")
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
});

// Vehicle Data Admin

router.post("/showvehicledata", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  Ride.findOne({
    owner: req.body.id,
    createdAt: { $gte: today },
  })
    .select("trips income")
    .populate("driver", "reviews.rating")
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Unsuccessfull" + err,
      });
    });
});

module.exports = router;
