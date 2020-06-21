const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  phoneNumber: { type: Sequelize.STRING(15), allowNull: true },
  profileImageURL: {type: Sequelize.STRING, allowNull: false, defaultValue:"https://via.placeholder.com/200x200.png"},
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.VIRTUAL },
  passwordHash: {type: Sequelize.STRING(60), allowNull: false},
  role: { type: Sequelize.ENUM("EMPLOYER", "USER"), allowNull: false },
});
module.exports = User;
