require('dotenv').config()

module.exports = {
    development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mariadb"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mariadb"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mariadb"
  }
}



// "development": {
//   "username": "coccs_admin",
//   "password": "fabroot1234",
//   "database": "coccs_arthro",
//   "host": "localhost",
//   "dialect": "mariadb"
// },
// "test": {
//   "username": "coccs_admin",
//   "password": "fabroot1234",
//   "database": "coccs_arthro",
//   "host": "localhost",
//   "dialect": "mariadb"
// },
// "production": {
//   "username": "coccs_admin",
//   "password": "fabroot1234",
//   "database": "coccs_arthro",
//   "host": "localhost",
//   "dialect": "mariadb"
// }