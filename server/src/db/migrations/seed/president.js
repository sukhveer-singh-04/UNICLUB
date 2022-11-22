const President = require("../../models/President");

const createPresidentCollection = () => {
  console.log('President Collection is created!');
  return President.init()
}

module.exports = { createPresidentCollection }
