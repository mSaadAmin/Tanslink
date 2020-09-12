const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Transaction = require("mongoose-transactions");
const transaction = new Transaction();
const cors = require("cors");
router.use(cors());
const {
  validate,
  LoginUserRules,
  UserValidation,
  updateUserValidation,
} = require("../Middlewares/Validation/ValidateUser");

const verifyToken = require("../Middlewares/Verification/auth");

const User = require("../Models/User");
const Ride = require("../Models/Ride");
const Route = require("../Models/Route");

/////////////////////API'S//////////////////

router.post("/signup", UserValidation(), validate, async (req, res) => {
  let userRole = req.body.role;
  async function start() {
    try {
      console.log("Enter SignUp Try Block");
      if (
        userRole === "admin" ||
        userRole === "superadmin" ||
        userRole === "user"
      ) {
        const UserDetails = new User({
          name: req.body.name,
          email: req.body.email,
          age: req.body.age,
          password: req.body.password,
          contact: req.body.contact,
          role: req.body.role,
        });
        await UserDetails.save();
      } else if (userRole === "driver") {
        const driverDetailsObj = {
          licence: req.body.licence,
          address: req.body.address,
          cnic: req.body.cnic,
        };

        const DriverDetails = new User({
          name: req.body.name,
          email: req.body.email,
          age: req.body.age,
          password: req.body.password,
          contact: req.body.contact,
          role: req.body.role,
          driverdetails: driverDetailsObj,
        });
        await DriverDetails.save();
      }
      const final = await transaction.run();
      return res.status(200).json({
        message: "Successfull",
      });
    } catch (err) {
      console.log("Entered Catch Block");
      console.log(err);
      const rollback = await transaction.rollback().catch((err) => {
        res.status(400).json({
          message: err,
        });
      });
      transaction.clean();
    }
  }
  start();
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (data) => {
      if (data === null) {
        res.status(400).json({
          message: "Enter Wrong Email Or Password",
        });
      } else {
        jwt.sign({ data }, "Tanslink", (err, token) => {
          if (err) {
            res.status(400).json({
              message: "Unsuccessfull",
              err,
            });
          } else {
            res.status(200).json({
              message: "Successfull",
              token,
            });
          }
        });
      }
    }
  );
});

router.post(
  "/updateuser",
  updateUserValidation(),
  validate,
  verifyToken,
  (req, res) => {
    jwt.verify(req.token, "Tanslink", (err, token) => {
      if (err) {
        return res.status(400).json({
          message: err,
        });
      } else {
        console.log("Token Verified");
      }
    });

    let userType = req.body.role;
    async function start() {
      try {
        if (userType === "admin" || userType === "superadmin") {
          await User.findOneAndUpdate(
            {
              _id: req.body.id,
            },
            {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              contact: req.body.contact,
              role: req.body.role,
            }
          )
            .then((data) => {
              return res.status(200).json({
                message: "Successfull",
              });
            })
            .catch((err) => {
              return res.status(400).json({
                message: err,
              });
            });
        } else if (userType === "driver") {
          const driverDetails = {
            licence: req.body.licence,
            address: req.body.address,
            cnic: req.body.cnic,
          };
          await User.findOneAndUpdate(
            {
              _id: req.body.id,
            },
            {
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              contact: req.body.contact,
              role: req.body.role,
              driverdetails: driverDetails,
            }
          )
            .then((data) => {
              return res.status(200).json({
                message: "Successfull",
              });
            })
            .catch((err) => {
              return res.status(400).json({
                message: err,
              });
            });
        }

        await transaction.run();
      } catch (err) {
        await transaction.rollback().catch(() => {
          return res.status(400).json({
            message: "Failed",
          });
        });
      }
    }
    start();
  }
);

router.post("/deleteuser", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      return res.status(400).json({ message: err });
    } else {
      console.log("Token Verified");
    }
  });
  User.findOneAndDelete({
    _id: req.body.id,
  })
    .then(() => {
      return res.status(200).json({
        message: "Successfull",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: err,
      });
    });
});

router.post("/getusers", verifyToken, (req, res) => {
  jwt.verify(req.token, "Tanslink", (err, data) => {
    if (err) {
      res.status(400).json({
        message: err,
      });
    } else {
      console.log("Token Verified");
    }
  });
  User.find({ role: "user" })
    .select("name email contact")
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

// router.post("/addlocation", verifyToken, (req, res) => {
//   jwt.verify(req.token, "Tanslink", (err, data) => {
//     if (err) {
//       res.json({
//         message: "Token Not Verified",
//       });
//       console.log("Token Not Verified");
//     } else {
//       console.log("Token Verified");
//     }
//   });

//   const Routedata = {
//     pointname: "Anarkali",
//     coordinates: ["2.5"],
//   };

//   //const RouteInfo = new Route({
//   //$push: { route: { $each: { Routedata } } },
//   //});

//   const Routes = Route;

//   Routes.route.push({ pointname: req.body.pointname });

//   Routes.save()
//     .then((data) => {
//       res.json({
//         message: data,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: err,
//       });
//     });

//   // RouteInfo.save()
//   //   .then((data) => {
//   //     res.json({
//   //       message: data,
//   //     });
//   //   })
//   //   .catch((err) => {
//   //     res.json({
//   //       message: err,
//   //     });
//   //   });
//   // async function start() {
//   //   try {
//   //     console.log("Entered Try Block");
//   //     const Routedata = {
//   //       pointname: "Anarkali",
//   //       coordinates: ["2.5"],
//   //     };

//   //     const RouteInfo = new Route({

//   //     });
//   //     await RouteInfo.save();
//   //     await transaction.run().then((data) => {
//   //       res.status(200).json({
//   //         message: data,
//   //       });
//   //     });
//   //   } catch (err) {
//   //     console.log("Entered Catch block");
//   //     await transaction.rollback().catch((err) => {
//   //       res.status(400).json({
//   //         message: err,
//   //       });
//   //     });
//   //     transaction.clean();
//   //   }
//   // }
//   // start();
// });

module.exports = router;
