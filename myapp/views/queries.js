
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12341234',
  database : 'TIC-REST'
});

module.exports=connection;

// connection.connect();
//
// connection.query(function(err) {
//   if (err) throw err;
//   console.log('Tu es connecté :p');
// });
//
// connection.end();


