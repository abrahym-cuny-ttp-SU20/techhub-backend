const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    firstName: { type: Sequelize.STRING, allowNull: false},
    lastName: { type: Sequelize.STRING, allowNull:false},
    phoneNumber: {type: Sequelize.STRING(15), allowNull: true},
    email: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.VIRTUAL},
    //passwordHash: {type: Sequelize.STRING, allowNull: false},
    role: {type: Sequelize.ENUM('EMPLOYER','USER'), allowNull:false}
})
module.exports = User;