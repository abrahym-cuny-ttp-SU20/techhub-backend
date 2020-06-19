const { User, Skill, PageLink } = require("../database/models");
const bcrypt = require("bcrypt");

const hash1 = bcrypt.hashSync('password111',10);
const hash2 = bcrypt.hashSync('password222',10);
const hash3 = bcrypt.hashSync('password333',10);

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "333-444-5555",
      email: "john@example.com",
      passwordHash: hash1,
      role: "USER",
    }),
    User.create({
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "444-555-6666",
      email: "jane@example.com",
      passwordHash: hash2,
      role: "USER",
    }),
    User.create({
      firstName: "Jack",
      lastName: "Doe",
      phoneNumber: "555-666-7777",
      email: "jack@example.com",
      passwordHash: hash3,
      role: "USER",
    }),
      Skill.create({
        name: "Java",
      }),
      Skill.create({
        name: "Machine Learning",
      }),
      Skill.create({
        name: "UI/UX",
      }),
      PageLink.create({
        title: "Jarvis AI project on Github",
        link: "https://www.github.com",
        imageURL: "https://via.placeholder.com/150",
        userId: 1
      }),
      PageLink.create({
        title: "My LinkedIn profile page.",
        link: "https://www.linkedin.com",
        imageURL: "https://via.placeholder.com/150",
        userId: 1
      }),
      PageLink.create({
        title: "My personal webpage",
        link: "https://www.marvel.com/characters/iron-man-tony-stark",
        imageURL: "https://via.placeholder.com/150",
        userId: 2
      }),
  ]);
};

module.exports = seedDatabase;
