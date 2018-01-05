const Sequelize = require('sequelize');
const sequelize = new Sequelize('TIC-REST', 'root', '12341234', {
  host: 'localhost',
  port: '8000',
  dialect: 'mysql',
 // tables: ['domain', 'domain_to_lang', 'lang', 'translation', 'translation_to_lang', 'user']

});

  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.domain = require('./models/domain.js')(sequelize, Sequelize);
db.domain_to_lang = require('./models/domain_to_lang.js')(sequelize, Sequelize);
db.lang = require('./models/lang.js')(sequelize, Sequelize);
db.translation = require('./models/translation.js')(sequelize, Sequelize);
db.translation_to_lang = require('./models/translation_to_lang.js')(sequelize, Sequelize);
db.user = require('./models/user.js')(sequelize, Sequelize);


