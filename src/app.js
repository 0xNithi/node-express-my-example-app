const express = require("express");
const app = express();

// parse json request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
