const mongoose = require("mongoose");

const eventCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }
  },
  {
    collection: "EventCategories",
    timestamp: true
  }
);

module.exports = mongoose.model("eventCategory", eventCategorySchema);
