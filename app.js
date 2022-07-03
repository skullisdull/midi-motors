const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const Gpio = require("onoff").Gpio;
const path = require("path");
const fs = require("fs");
const favicon = require("serve-favicon");

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public/favicon.ico")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);
  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} disconnected. Reason: ${reason}`);
  });

  socket.emit("midi files", fs.readdirSync("public/midi"));

  socket.on("song chosen", (song) => {
    console.log(song);
    
  });
});

server.listen(5000);