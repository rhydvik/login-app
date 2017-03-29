var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to frontend folder do npm install & node app.js'});
});

module.exports = router;
