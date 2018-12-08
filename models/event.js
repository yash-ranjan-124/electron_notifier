const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    venu: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: "eventCategory" }
  },
  { collection: "Events", timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
