const socketio = require("socket.io");

class SocketIOHandler {
  constructor(port = 3000) {
    this.port = port;
    this.io = null;
    this.server_started = false;
  }
  startSocketServer() {
    console.log("\nStarting Socket server", "\n");
    this.io = socketio.listen(this.port);
    this.io.sockets.on("connection", socket => {
      socket.on("join", data => {
        console.log(data);
        socket.join(data.email);
      });
      socket.on("connect_error", error => {
        throw error;
      });
      socket.on("connect_timeout", timeout => {
        throw new Error("socket time out error : ", timeout);
      });
      socket.on("error", error => {
        throw error;
      });
    });
    this.server_started = true;
    console.log("\nSocket Server started on port:", this.port, "\n");
    return this;
  }
  getSocketServerObj() {
    if (this.server_started) return this.io;
    else throw new Error("Unable to start socket Server");
  }
}

module.exports = SocketIOHandler;
