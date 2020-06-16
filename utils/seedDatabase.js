const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "333-444-5555",
        email: "john@example.com",
        role: "USER"
    }),
    User.create({
        firstName: "Jane",
        lastName: "Doe",
        phoneNumber: "444-555-6666",
        email: "jane@example.com",
        role: "USER"
    }),
    User.create({
        firstName: "Jack",
        lastName: "Doe",
        phoneNumber: "555-666-7777",
        email: "jack@example.com",
        role: "USER"
    }),
  ]);
};

module.exports = seedDatabase;
