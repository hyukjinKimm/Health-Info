const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        tupe: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {}
  
};