const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverInfo = new Schema(
  {
    licence: {
      type: String,
      required: true,
    },
    // rating: {
    //   type: Number,
    //   default: 4,
    // },
    address: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    rideid: {
      type: Schema.Types.ObjectId,
      ref: "ride",
    },
    pic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// UserInfo.virtual("averagerating").get(function() {
//   let reviews = this.reviews;
//   let counter = 0;
//   let avgRating = 0;
//   reviews.forEach(review => {
//     avgRating += review.rating;
//     counter++;
//   });
//   return avgRating / counter;
// });

// DriverInfo.virtual("averagerating").get(function () {
//   let rating = this.rating;
//   let counter = 0;
//   let avgRating = 0;

//   rating.foreach((rating) => {
//     avgRating += rating;
//     counter++;
//   });
//   return (this.rating = avgRating / counter);
// });

// DriverInfo.set("toObject", { virtuals: true });
// DriverInfo.set("toJSON", { virtuals: true });

module.exports = DriverInfo;
