var express = require('express');
var router = express.Router();
const { user } = require('../controllers')


// Subrouters;
router.post('/register',user.register);


// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
