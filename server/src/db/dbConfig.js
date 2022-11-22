const mongoose = require('mongoose')
const env = require("../config/env");

const connectDB = () => {
  mongoose.connection.on('connected', () => console.log('Mongo DB Connection Successful!'));

  return mongoose.connect(env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
}

const closeDbConnection = () => {
  return mongoose.connection.close();
}

module.exports = { connectDB, closeDbConnection }