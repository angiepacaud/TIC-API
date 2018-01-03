var mysql      = require('mysql');
var db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '12341234',
  database : 'TIC-REST'
});


/* add query functions */

function getAllDomain(req, res, next) { 
  return db.query('select id, name, description from domain', function(err, rows) {
    console.log(res[0]);
    res.status(200)
      .json({
        status: 'success',
        data: rows,
        message: 'Retrieved all domains.'
      });
  });    
}

// function getAllDomainById(req, res, next) {
//   return db.query('select * from domain where id='+ req.params.id, function(err, rows) {
//     console.log(res[0]);
//     if(err){
//       res.status(err)
//       .json({
//       status: 'error',  
//       message: "Not Found"
//     });
//     } else{ 
//     res.status(200)
//       .json({
//         status: 'success',
//         data: rows,
//         message: 'Retrieved domains Id.'
//       });
//     }
//   });    
// }

function getAllDomainById(req, res, next) {
  return db.query('select user.username, domain.* , lang.* from `user` inner join domain on domain.user_id = `user`.id inner join domain_to_lang on domain_to_lang.domain_id = domain.id inner join lang on lang.id_lang = domain_to_lang.lang_id where domain.id='+ req.params.id, function(err, rows) {
    console.log(res[0]);
    res.status(200)
      .json({
        status: 'success',
        data: rows,
        message: 'Retrieved domains Id.'
      });
    
  });    
}

// function getAllTranslation(req, res, next) {
//   return db.query('select * from translation', function (err, rows) {
//     console.log(res[0]);
//     res.status(200)
//       .json({
//         status: 'success',
//         data: rows,
//         message: 'Retrieved all translations.'
//       });
//   });
// }

function getAllTranslationById(req, res, next) {
  return db.query('SELECT translation.id, translation.`key`, translation_to_lang.value, lang.code FROM translation INNER join translation_to_lang INNER join lang on lang.id_lang = translation_to_lang.lang_id INNER JOIN domain on domain.id = translation.domain_id WHERE domain.id ='+ req.params.id, function (err, rows) {
    console.log(res[0]);
    res.status(200)
      .json({
        status: 'success',
        data: rows,
        message: 'Retrieved all translations.'
      });
  });
}

function postAllTranslation(req, res, next) {
  return db.query('insert into translation (id, key, domain_id) values (8, --see_you--, 7) insert into translation_to_lang (value, lang_id) values (a_plus, 1) (see_you_later, 2)', function (err, rows) {
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
  /* GET function */
	getAllDomain:getAllDomain,
  getAllDomainById:getAllDomainById,
  getAllTranslationById:getAllTranslationById,
  // getAllTranslation:getAllTranslation

  /* POST function */
	postAllTranslation:postAllTranslation

  /* PUT function */

  /* DELETE function */
};