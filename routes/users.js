var express = require('express');
var router = express.Router();
const passport = require('passport');
const { User } = require("../database/models");

/* GET users listing. */
router.post('/login', passport.authenticate('local'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.sendStatus(200);
    });

router.post('/', async (req,res,next) => {
  const {email} = req.body;
  console.log(typeof email)
  try {
    const user = await User.findOne({where: {email: email}});
    res.status(200).json(user);
  }catch(err) {
    next(err);
  }
})
module.exports = router;
