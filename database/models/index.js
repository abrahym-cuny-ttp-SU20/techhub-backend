const User = require("./user");
const Skill = require("./skill");
const PageLink = require("./pageLink");

User.belongsToMany(Skill,{through: 'Possession'});
Skill.belongsToMany(User, { through: "Possession"});

User.hasMany(PageLink);
PageLink.belongsTo(User);

module.exports = {
    User, Skill, PageLink
};