var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var jwt = require('jsonwebtoken');




/* GET home page. */
router.post('/', function(req, res) {
  var token = jwt.sign({ foo: req.body.username }, 'shhhhh');
  var userInfo = {
    name : req.body.name,
    password: req.body.password,
    username: req.body.username,
    email:req.body.email,
    token: token
  };
  console.log(userInfo);
  var userCreated = false;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    createUser(db, function() {
       db.close();
     });
  });

  var createUser = function(db, callback) {
     db.collection('users').insertOne(userInfo, function(err, result) {
      assert.equal(err, null);
      callback();
    });
  };

    console.log('sucess');
    res.send('success');
});





module.exports = router;
