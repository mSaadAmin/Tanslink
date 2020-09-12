const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Driver = require("./Driver");
const UserInfo = require("./UserDetails");
const Review = require("./Review");

const UserDetails = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    driverdetails: Driver,
    userinfo: UserInfo,
    reviews: [Review],
  },
  {
    timestamps: true,
  }
);

UserDetails.virtual("averagerating").get(function () {
  let reviews = this.reviews;
  let counter = 0;
  let avgRating = 0;
  reviews.forEach((review) => {
    avgRating += review.rating;
    counter++;
  });
  return avgRating / counter;
});

UserDetails.set("toObject", { virtuals: true });
UserDetails.set("toJSON", { virtuals: true });

module.exports = User = mongoose.model("user", UserDetails);
