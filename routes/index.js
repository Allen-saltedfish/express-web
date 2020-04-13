var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let object = {login: false, title: 'deepLG',name: 'Bob',age:18};
  res.render('index',object );
});

module.exports = router;
