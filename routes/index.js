var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express',name: 'Bob',age:18,gender:"男"});
});

module.exports = router;
