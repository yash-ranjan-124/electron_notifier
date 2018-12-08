const userModel = require("../models/user");

class UserServices {
  async signIn(email, password) {
    try {
      let response = await userModel.findOne({
        email: email,
        password: password
      });
      if (!response) throw new Error("Invalid Credentials");
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async signUp(userData) {
    try {
      let { username, email, password, interest } = userData;
      let userExistsResponse = await userModel.findOne({ email: email });
      if (userExistsResponse) throw new Error("user already exists!!");
      let user = new userModel({
        name: username,
        email,
        password,
        interest
      });
      let createUserResponse = await user.save();
      return createUserResponse;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = new UserServices();
