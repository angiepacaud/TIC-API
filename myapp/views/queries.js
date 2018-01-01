var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12341234',
  database : 'TIC-REST'
});

var db = mysql(connection);

module.exports=connection;

// connection.connect();

// connection.query(function(err) {
//   if (err) throw err;
//   console.log('Tu es connecté :p');
// });

// connection.end();



// add query functions

function getAllDomain(req, res, next) {
  db.any('select * from domain__domain')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users.'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
	getAllDomain:getAllDomain
	
};