var express = require('express');
var router = express.Router();
var db = require('../views/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// module.exports = router;

router.get('/api/domain', db.getAllDomain);
router.get('/api/domain/:id', db.getAllDomainById);
router.get('/api/domain/:id/translation', db.getAllTranslationById);
// router.get('/api/translation', db.getAllTranslation);

// POST route
router.post();

module.exports = router;
