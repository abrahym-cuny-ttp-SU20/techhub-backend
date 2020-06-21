const { Skill } = require("../database/models");
const { UserSkill } = require("../database/models");
const db = require("../database");

const getAllUserSkills = async (id) => {
  try {
    return await db.query(
      `SELECT s.id, s.name ` +
        ` FROM user_skills AS us,skills AS s ` +
        ` WHERE us."skillId" = s.id AND us."userId"=:id`,
      { model: Skill, replacements: { id: id } }
    );
  } catch (err) {
    return err;
  }
};

const addSkill = async (name, userId) => {
  try {
    return await Skill.findOrCreate({ where: { name: name } }).then((createdSkill) => {
        const newUserSkill = {
          userId: userId,
          skillId: createdSkill[0].dataValues.id,
        };
        UserSkill.create(newUserSkill);
        return createdSkill[0];
      }
    );
  } catch (err) {
    return err;
  }
};

const deleteSkill = async (id,userId) => {
  try {
    const userSkill = await UserSkill.findOne({where:{skillId: id, userId: userId}});
    userSkill.destroy();
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUserSkills,
  addSkill,
  deleteSkill,
};
