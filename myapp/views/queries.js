var mysql      = require('mysql');
var db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'TIC-REST'
});
 


// add query functions

function getAllDomain(req, res, next) {
  return db.query('select * from domain', function(err, rows) {
    console.log(res[0]);
    res.status(200)
      .json({
        status: 'success',
        data: rows,
        message: 'Retrieved all domains.'
      });
  });    
}

function getAllTranslation(req, res, next) {
  return db.query('select * from translation', function (err, rows) {
    console.log(res[0]);
    res.status(200)
      .json({
        status: 'success',
        data: rows,
        message: 'Retrieved all translations.'
      });
  });
}

module.exports = {
	getAllDomain:getAllDomain,
  getAllTranslation: getAllTranslation
	
};