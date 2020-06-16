const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: Sequelize.STRING, allowNull: false},
    lastName: { type: Sequelize.STRING, allowNull:false},
    phoneNumber: {type: Sequelize.STRING(15), allowNull: true}
})
module.exports = User;