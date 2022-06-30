const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      nick: {
         type: Sequelize.STRING(20),
         allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      genger: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsToMany(db.Comment, { through: 'UserComment' });
    db.User.belongsToMany(db.Comment, { through: 'UserLikeComment' })
  }
}