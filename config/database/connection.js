const dotenv = require("dotenv").config({
  path: require("find-config")(".env"),
});
const Sequelize = require("sequelize");
const config = require("./enviroment")[process.env.NODE_ENV];
console.log(config);
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
  raw: true,
  port: "5432",
  seederStorage: process.env.SEEDER_STORAGE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to database establised");
  })
  .catch((error) => {
    console.error(`Unable to connect to database: ${err}`);
  });

module.exports = sequelize;
