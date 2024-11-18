const { Sequelize } = require('sequelize');

//use your my sql database name , username & password
const sequelize = new Sequelize('my_database', 'ft35_065', 'Adityars@0709', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
