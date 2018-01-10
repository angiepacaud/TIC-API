var mysql      = require('mysql');
var db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
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
  var requiredFields = ['key', 'trans'];
  var requiredFields2 = ['lang_id', 'translation_id', 'value']
  console.log(checkvalideform(requiredFields, req.body));
  if(checkvalideform(requiredFields, req.body)){
    var query = 'INSERT INTO translation (`key`, domain_id) VALUES ("' + req.body.key + '", ' + req.params.id + ')';
    db.query(query, function (err, rows) {
      console.log(err,rows);
    });
  }
  if(req.params.lang_id && req.params.translation_id && req.body.value) {
    var requireParams = [req.params.lang_id, req.params.translation_id, req.body.value];
    if(checkvalideform(requiredFields2, req.body.trans)) {
      var query2 = 'INSERT INTO translation_to_lang(lang_id, translation_id,value) VALUES ('+req.body.trans.lang_id+ ',' +req.body.trans.translation_id+ ',' +req.body.trans.value+ ')';
      return db.query(query2, function (err, rows) {
        console.log(err,rows);
        res.status(200)
        .json({
          status: 'success',
          data: rows,
          message: 'Modified translations.'
        });
      });
    }
  }
    else {
      return res.status(400)
      .json({
        status: 'error',
        message: 'BAD request.'
      });
    }
  }

  function checkvalideform(array, dataform){
    var arrayCopy = array;
    if(dataform){
     for(var key in dataform){
      arrayCopy.forEach(function(RequiredKey, index) {
        if(RequiredKey == key && dataform[key]){
          arrayCopy.splice(index, 1);
        }
      })
    }
    return arrayCopy.length === 0;
  }
  return false;
}

// function putAllTranslation(req, res, next) {
//   return db.query('UPDATE `translation_to_lang` SET `value` = 'fycfcfd' WHERE `translation_to_lang`.`lang_id` = '1' AND `translation_to_lang`.`translation_id` = 9 (SELECT translation.id, translation.`key`, translation_to_lang.value, lang.code FROM translation INNER join translation_to_lang INNER join lang on lang.id_lang = translation_to_lang.lang_id INNER JOIN domain on domain.id = translation.domain_id WHERE domain.id AND translation.`key` = '--bye--')', function (err, rows) {
//     console.log(res[0]);
//     res.status(200)
//       .json({
//         status: 'success',
//         data: rows,
//         message: 'Ajouted translations.'
//       });
//   });
// }

// requete affiche key bye return db.query('SELECT translation.id, translation.`key`, translation_to_lang.value, lang.code FROM translation INNER join translation_to_lang INNER join lang on lang.id_lang = translation_to_lang.lang_id INNER JOIN domain on domain.id = translation.domain_id WHERE domain.id AND translation.`key` = '--bye--')', function (err, rows) //


// function deleteTranslation(req, res, next) {
//   return db.query('DELETE FROM `translation_to_lang` WHERE `translation_id`= 9 (SELECT `key`= '--test--' FROM `translation` )', function (err, rows) {
//     console.log(res[0]);
//     res.status(200)
//       .json({
//         status: 'success',
//         data: rows,
//         message: 'Sup translations.'
//       });
//   });
// }

module.exports = {
  /* GET function */
  getAllDomain:getAllDomain,
  getAllDomainById:getAllDomainById,
  getAllTranslationById:getAllTranslationById,
  // getAllTranslation:getAllTranslation

  /* POST function */
  postAllTranslation:postAllTranslation

 //   PUT function 
 //  putAllTranslation:putAllTranslation,

 /* DELETE function */
  //deleteTranslation!deleteTranslation
};