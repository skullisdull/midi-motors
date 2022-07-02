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
  console.log("connected");
});

server.listen(5000);