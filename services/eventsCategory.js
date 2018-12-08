const eventCategoryModel = require("../models/eventCategory");

class EventCategoryServices {
  async addCategory(name) {
    try {
      let category = new eventCategoryModel({ name });
      let response = await category.save();
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getAllCategory() {
    try {
      let response = await eventCategoryModel.find({});
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = new EventCategoryServices();
