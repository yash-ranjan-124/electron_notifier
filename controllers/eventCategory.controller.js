const EventCategoryServices = require("../services/eventsCategory");

class EventCategoryController {
  async addCategory(req, res, next) {
    try {
      let { name } = req.body;
      let response = await EventCategoryServices.addCategory(name);
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getAllCatgory(req, res, next) {
    try {
      let response = await EventCategoryServices.getAllCategory();
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = new EventCategoryController();
