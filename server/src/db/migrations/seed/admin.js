const Admin = require("../../models/Admin");

const createAdminCollection = () => {
  console.log('Admin Collection is created!');
  return Admin.init();
}

module.exports = { createAdminCollection };