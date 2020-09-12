const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const verifyToken = require("../Middlewares/Verification/auth");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ride = require("../Models/Ride");
const User = require("../Models/User");
const Route = require("../Models/Route");

//Passenger Details

router.post("/showrides", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });

  Ride.findOne({ driver: `${req.body.id}` })
    .select("name")
    .populate("user", "contact name")
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

// Booking

router.post("/addride", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      return res.status(400).json({
        message: "Token Not Verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  mongoose.Types.ObjectId.isValid(req.body.userid);
  Ride.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      $push: { user: `${[req.body.rideid]}` },
    }
  )
    .then((data) => {
      res.status(200).json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        message: err,
      });
    });
});

//End Booking

router.post("/endride", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      return res.status(400).json({
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
      $set: { user: [] },
      $inc: { income: req.body.newincome, trips: 1 },
    }
  )
    .then((data) => {
      res.status(200).json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        message: err,
      });
    });
});

router.post("/driverrating", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.json({
        message: "Token Not verified",
      });
    } else {
      console.log("Token Verified");
    }
  });
  const driverrating = {
    rating: req.body.rating,
    comment: req.body.comment,
  };

  User.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      $push: { reviews: driverrating },
    }
  )
    .then((data) => {
      res.json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
});

module.exports = router;

///////////////////////////////
///////////////////////////////
///////////////////////////////

//Extra Work Done

// router.post("/signup", UserValidation(), validate, async (req, res) => {
//   let userRole = req.body.role;
//   async function start() {
//     try {
//       console.log("Enter SignUp Try Block");
//       if (userRole === "admin" || userRole === "superadmin") {
//         const UserDetails = new User({
//           name: req.body.name,
//           email: req.body.email,
//           age: req.body.age,
//           password: req.body.password,
//           contact: req.body.contact,
//           role: req.body.role
//         });
//         await UserDetails.save();
//       } else if (userRole === "driver") {
//         const driverDetailsObj = {
//           licence: req.body.licence,
//           address: req.body.address,
//           cnic: req.body.cnic
//         };

//         const DriverDetails = new User({
//           name: req.body.name,
//           email: req.body.email,
//           age: req.body.age,
//           password: req.body.password,
//           contact: req.body.contact,
//           role: req.body.role,
//           driverdetails: driverDetailsObj
//         });
//         await DriverDetails.save();
//       }
//       const final = await transaction.run();
//       return res.status(200).json({
//         message: "Successfull"
//       });
//     } catch (err) {
//       console.log("Entered Catch Block");
//       console.log(err);
//       const rollback = await transaction.rollback().catch(err => {
//         res.status(400).json({
//           message: err
//         });
//       });
//       transaction.clean();
//     }
//   }
//   start();
// });

// router.post(
//     "/updateuser",
//     updateUserValidation(),
//     validate,
//     verifyToken,
//     (req, res) => {
//       jwt.verify(req.token, "Tanslink", (err, token) => {
//         if (err) {
//           return res.status(400).json({
//             message: err,
//           });
//         } else {
//           console.log("Successfull Token");
//         }
//       });

//       let userType = req.body.role;
//       async function start() {
//         try {
//           if (userType === "user") {
//             await User.findOneAndUpdate(
//               {
//                 _id: req.body.id,
//               },
//               {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password,
//                 contact: req.body.contact,
//                 role: req.body.role,
//               }
//             )
//               .then((data) => {
//                 return res.status(200).json({
//                   message: "Successfull",
//                 });
//               })
//               .catch((err) => {
//                 return res.status(400).json({
//                   message: err,
//                 });
//               });
//           } else if (userType === "driver") {
//             const driverDetails = {
//               licence: req.body.licence,
//               address: req.body.address,
//               cnic: req.body.cnic,
//             };
//             await User.findOneAndUpdate(
//               {
//                 _id: req.body.id,
//               },
//               {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password,
//                 contact: req.body.contact,
//                 role: req.body.role,
//                 driverdetails: driverDetails,
//               }
//             )
//               .then((data) => {
//                 return res.status(200).json({
//                   message: "Successfull",
//                 });
//               })
//               .catch((err) => {
//                 return res.status(400).json({
//                   message: err,
//                 });
//               });
//           }

//           await transaction.run();
//         } catch (err) {
//           await transaction.rollback().catch(() => {
//             return res.status(400).json({
//               message: "Failed",
//             });
//           });
//         }
//       }
//       start();
//     }
//   );

// router.post(
//   "/updateuser",
//   updateUserValidation(),
//   validate,
//   verifyToken,
//   (req, res) => {
//     jwt.verify(req.token, "Tanslink", (err, token) => {
//       if (err) {
//         return res.status(400).json({
//           message: err,
//         });
//       } else {
//         console.log("Successfull Token");
//       }
//     });

//     User.findOneAndUpdate(
//       {
//         _id: req.body.id,
//       },
//       {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         contact: req.body.contact,
//         age: req.body.age,
//         role: req.body.role,
//       }
//     )
//       .then((data) => {
//         return res.status(200).json({
//           message: "Successfull",
//         });
//       })
//       .catch((err) => {
//         return res.status(400).json({
//           message: err,
//         });
//       });
//   }
// );

// router.post("/signup", UserValidation(), validate, async (req, res) => {
//   const UserDetails = new User({
//     name: req.body.name,
//     email: req.body.email,
//     age: req.body.age,
//     password: req.body.password,
//     contact: req.body.contact,
//     role: req.body.role,
//   });
//   UserDetails.save()
//     .then(() => {
//       res.status(200).json({
//         message: "Successfull",
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: "Unsuccessfull" + err,
//       });
//     });
// });
