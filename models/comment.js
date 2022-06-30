const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
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

  static associate(db) {
    db.Comment.belongsToMany(db.User, { through: 'UserComment' });
    db.Comment.belongsToMany(db.Exercise, { through: 'ExerciseComment' });
    db.Comment.belongsToMany(db.User, { through: 'UserLikeComment' });
  }

};