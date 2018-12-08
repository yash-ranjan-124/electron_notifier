const eventModel = require("../models/event");
const userModel = require("../models/user");

class EventServices {
  async PostEvent(eventData) {
    try {
      let { name, venu, startDate, endDate, description, type } = eventData;
      let event = new eventModel({
        name,
        venu,
        startDate,
        endDate,
        description,
        type
      });

      let eventResponse = await event.save();
      if (eventResponse)
        this.PostEventsToUser(type, {
          name,
          venu,
          startDate,
          endDate,
          description
        });
      return eventResponse;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async PostEventsToUser(type, details) {
    try {
      let users = await userModel.find({ interest: type });
      if (users) {
        if (users[0]) {
          for (let key in users) {
            IO.sockets
              .in(users[key]["email"])
              .emit("new_event", { msg: "New Event!!", details });
          }
        } else {
          IO.sockets
            .in(users["email"])
            .emit("new_event", { msg: "New Event!!", details });
        }
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async getAllEvents(eventData) {
    try {
      let response = await eventModel.find({});
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = new EventServices();
