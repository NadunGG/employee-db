const { Sequelize } = require('sequelize');
const config = require('../config/dbConfig');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    pool: {
      min: config.development.pool.min,
      max: config.development.pool.max,
      acquire: config.development.pool.acquire,
      idle: config.development.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to DB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

db.employeeModel = require('./employee')(sequelize, Sequelize);

module.exports = db;
