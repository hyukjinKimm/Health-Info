const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Comment = require('./comment');
const Bigpart = require('./bigpart');
const Smallpart = require('./smallpart');
const Exercise = require('./exercise');


const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;
db.Bigpart = Bigpart;
db.Smallpart = Smallpart;
db.Exercise = Exercise;

User.init(sequelize);
Comment.init(sequelize);
Bigpart.init(sequelize);
Smallpart.init(sequelize);
Exercise.init(sequelize);

User.associate(db);
Comment.associate(db);
Bigpart.associate(db);
Smallpart.associate(db);
Exercise.associate(db)

module.exports = db;
