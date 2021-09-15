const dotenv = require("dotenv").config();
module.exports = {
  localhostOnline: {
    host: process.env.LOCALHOST_HOSTNAME,
    database: process.env.LOCALHOST_DB_NAME,
    username: process.env.LOCALHOST_USERNAME,
    password: process.env.LOCALHOST_PASSWORD,
    dialect: process.env.DIALECT,
    secret: process.env.SECRET,
  },
};
