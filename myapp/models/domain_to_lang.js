/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('domain_to_lang', {
    domain_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    lang_id: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'domain_to_lang'
  });
};
