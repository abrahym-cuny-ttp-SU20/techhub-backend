const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "333-444-5555"
    }),
    User.create({
        firstName: "Jane",
        lastName: "Doe",
        phoneNumber: "444-555-6666"
    }),
    User.create({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "555-666-7777"
    }),
  ]);
};

module.exports = seedDatabase;
