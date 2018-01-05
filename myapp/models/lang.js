/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang', {
    id_lang: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    tableName: 'lang'
  });
};
