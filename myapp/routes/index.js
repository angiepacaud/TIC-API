var express = require('express');
var router = express.Router();
var connection = require('../views/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/domains', db.getAllDomain);

module.exports = router;