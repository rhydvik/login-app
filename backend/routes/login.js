var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';


/* GET home page. */
router.post('/', function(req, res) {
  var userInfo =  req.body;
  console.log(userInfo);
  var validUser = false;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    authenticate(db, function() {
       db.close();
     });
  });

  var authenticate = function(db, callback) {
    var query = {
      username: req.body.username,
      password: req.body.password
    }
    console.log('------query-----',query);
    db.collection('users').findOne(query, function(err, document) {
      console.log("---",document);
      if (document != null) {
        console.log("********",document.token);
        data= {
          user: 'valid',
          token:document.token,
          name:document.name,
          email:document.email,
        }
        res.send(data);
      }else {
        console.log(document);
        res.send('failed');
      }
    });
  };
});





module.exports = router;
