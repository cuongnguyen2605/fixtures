const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes/v1");

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.get("*", (req, res) => {
  res.json("Welcome!");
});

module.exports = app;
