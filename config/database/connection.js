const dotenv = require("dotenv").config();
const sequelize = require("sequelize");
const config = require("./enviroment")[process.env.NODE_ENV];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    raw: true,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database establised");
  })
  .catch((error) => {
    console.error(`Unable to connect to database: ${err}`);
  });

module.exports = sequelize;
