require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const morgan = require("morgan");
const helmet = require("helmet");

app.use(helmet());
app.use(morgan("combined"));

app.use(cors());

app.get("/", (req, res) => {
  res.send(`DEMO BLOG v.1.0 ${new Date()}`);
});

module.exports = app;
