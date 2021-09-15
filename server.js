const express = require("express");
require("dotenv").config();

const app = require("./app");

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port: ${process.env.APP_PORT} 🌎`);
});
