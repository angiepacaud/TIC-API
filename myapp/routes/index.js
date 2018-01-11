var express = require('express');
var router = express.Router();
var db = require('../views/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET route */

router.get('/api/domain', db.getAllDomain);
router.get('/api/domain/:id', db.getAllDomainById);
router.get('/api/domain/:id/translation', db.getAllTranslationById);
// router.get('/api/translation', db.getAllTranslation);

/* POST route */
router.post('/api/domain/:id/translation', db.postAllTranslation);


// /* PUT route */
// router.put('/api/domain/:id/translation/:key', db.putAllTranslation);

// /* DELETE route */
// router.delete('/api/domain/:id/translation/:key', db.deleteAllTranslation);

module.exports = router;
