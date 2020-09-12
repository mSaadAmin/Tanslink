const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverReview = new Schema(
  {
    rating: {
      type: Number,
      default: 4,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = DriverReview;
