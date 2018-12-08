let userServices = require("../services/user");

class UserController {
  async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let response = await userServices.signIn(email, password);
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async signUp(req, res, next) {
    try {
      let userData = req.body;
      let response = await userServices.signUp(userData);
      res.send(response);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = new UserController();
