const express = require("express");
const path = require("path");
const fs = require("fs");

const files = fs.readdirSync("midi");
const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static("public"));

app.listen(5000);