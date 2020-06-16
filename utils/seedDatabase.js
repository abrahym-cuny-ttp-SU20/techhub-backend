const { User, Skill, PageLink } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "333-444-5555",
      email: "john@example.com",
      role: "USER",
    }),
    User.create({
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "444-555-6666",
      email: "jane@example.com",
      role: "USER",
    }),
    User.create({
      firstName: "Jack",
      lastName: "Doe",
      phoneNumber: "555-666-7777",
      email: "jack@example.com",
      role: "USER",
    }),
      Skill.create({
        name: "Java",
      }),
      Skill.create({
        name: "Machine Learning",
      }),
      Skill.create({
        name: "UI/UX"
      }),
      PageLink.create({
        title: "Jarvis AI project on Github",
        link: "https://www.github.com",
        image: "https://via.placeholder.com/150",
      }),
      PageLink.create({
        title: "My LinkedIn profile page.",
        link: "https://www.linkedin.com",
        image: "https://via.placeholder.com/150",
      }),
      PageLink.create({
        title: "My personal webpage",
        link: "https://www.marvel.com/characters/iron-man-tony-stark",
        image: "https://via.placeholder.com/150",
      })
  ]);
};

module.exports = seedDatabase;
