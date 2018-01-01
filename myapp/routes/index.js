var express = require('express');
var router = express.Router();
var connection = require('../views/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// module.exports = router;

router.get('/api', function(req, res, next){
	
});
// app.use('/api', router);

// router.route('/domains')
// .get(function(req, res){
// 	Domain.find(function(err,domains){
// 		if (err)
// 			res.send(err);
// 		res.json(domains);
// 	});
// });

 router.get('/api/domains', db.getAllDomain);

module.exports = router;
