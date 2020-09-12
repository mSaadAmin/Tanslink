const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteInfo = new Schema({
  route: [
    {
      pointname: {
        type: String,
      },
    },
    {
      coordinates: {
        type: [Number],
      },
    },
  ],
  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "ride",
    },
  ],
});

module.exports = Route = mongoose.model("route", RouteInfo);
