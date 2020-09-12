const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RideInfo = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      index: true,
    },
    trips: {
      type: Number,
      default: 0,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: "user",
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    modelno: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      default: 0,
    },
    seats: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
        index: true,
      },
      {
        type: Boolean,
        default: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// RideInfo.virtual("totalincome").get(function () {
//   const oldincome = this.income;
//   return (this.income = oldincome+income );
// });

// RideInfo.set("toObject", { virtuals: true });
// RideInfo.set("toJSON", { virtuals: true });

module.exports = Ride = mongoose.model("ride", RideInfo);
