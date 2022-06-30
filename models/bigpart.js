const Sequelize = require('sequelize');

module.exports = class Bigpart extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Bigpart',
      tableName: 'bigparts',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {}
}
