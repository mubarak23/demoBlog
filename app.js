require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

const morgan = require("morgan");
const helmet = require("helmet");

const routes = require("./routes");

app.use(helmet());
app.use(morgan("combined"));

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send(`DEMO BLOG v.1.0 ${new Date()}`);
});

app.use("/demo/v1", routes);

module.exports = app;
