const mongoose = require("mongoose");
const defaultConnectionUrl = process.env.MONGO_URL;
class MongooseConnector {
  constructor(configUrl = defaultConnectionUrl) {
    this.configUrl = configUrl;
  }
  connect() {
    mongoose.connect(
      this.configUrl,
      { useNewUrlParser: true, useCreateIndex: true }
    );
    mongoose.connection
      .on("error", err => {
        console.log("\nMongo connection error:", err, "\n");
      })
      .on("open", () => {
        console.log("\nMongo Connection Established!!\n");
      });
  }
  disconnect() {
    mongoose.connection.close();
  }
}

module.exports = MongooseConnector;
