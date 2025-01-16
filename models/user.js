// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

// Define the User model
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
