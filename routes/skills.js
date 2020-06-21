let express = require("express");
let router = express.Router();
const { skillService } = require("../services");

const { getAllUserSkills, addSkill, deleteSkill } = skillService;

router.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const skills = await getAllUserSkills(id);
    res.status(200).json(skills);
  } catch (err) {
    next(err);
  }
});

router.post("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const newSkill = await addSkill(req.body.name, id);
    res.status(201).json(newSkill);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/users/:userId", async (req,res,next) => {
  const { id, userId } = req.params;
  try {
    await deleteSkill(id,userId);
    res.sendStatus(204);
  }
  catch(err) {
    next(err);
  }
})

module.exports = router;
