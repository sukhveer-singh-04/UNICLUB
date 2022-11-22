const {createAdminCollection} = require("./admin");
const {createPresidentCollection} = require("./president");
const {seedClubs, clearClubCollection} = require("./club");
const {closeDbConnection, connectDB} = require("../../dbConfig");

connectDB()
  .then(() => clearClubCollection()
    .then(() => seedClubs()
      .then(() => createPresidentCollection()
        .then(() => createAdminCollection()
          .then(() => closeDbConnection())))))