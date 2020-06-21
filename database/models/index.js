const User = require("./user");
const Skill = require("./skill");
const PageLink = require("./pageLink");
const UserSkill = require("./user_skill");

User.belongsToMany(Skill, { through: UserSkill });
Skill.belongsToMany(User, { through: UserSkill });

User.hasMany(PageLink);
PageLink.belongsTo(User);

module.exports = {
  User,
  Skill,
  PageLink,
  UserSkill,
};
