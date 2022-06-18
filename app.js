const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Server is up and on port 5000");
});
