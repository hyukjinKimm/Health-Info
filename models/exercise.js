const Sequelize = require('sequelize');

module.exports = class Exercise extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      src: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Exercise',
      tableName: 'exercises',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {}
}
