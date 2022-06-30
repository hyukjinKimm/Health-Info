const Sequelize = require('sequelize');

module.exports = class Smallpart extends Sequelize.Model {
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
      modelName: 'Smallpart',
      tableName: 'smallparts',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Smallpart.belongsToMany(db.Bigpart, { through: 'BigpartSmallpart' });
    db.Smallpart.belongsToMany(db.Exercise, { through: 'SmallpartExercise' });
  }
}
