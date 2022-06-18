const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    result: "200"
  });
});

app.listen(5000, () => {
  console.log("Server is up and on port 5000");
});