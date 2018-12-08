const EventServices = require("../services/event");

class EventController {
  async PostEvent(req, res, next) {
    try {
      let eventData = req.body;
      let response = await EventServices.PostEvent(eventData);
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  async getAllEvents(req, res, next) {
    try {
      let response = await EventServices.getAllEvents();
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = new EventController();
