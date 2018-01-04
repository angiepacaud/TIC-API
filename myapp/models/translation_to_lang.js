/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('translation_to_lang', {
    lang_id: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    translation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(2555),
      allowNull: false
    }
  }, {
    tableName: 'translation_to_lang'
  });
};
