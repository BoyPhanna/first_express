// db.js
const { Sequelize } = require("sequelize");

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db", // Path to SQLite database file
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to SQLite has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
