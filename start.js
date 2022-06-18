const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => {
  console.log("Server is up and on port 5000");
});