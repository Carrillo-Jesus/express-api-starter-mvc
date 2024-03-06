const { Sequelize } = require('sequelize');
const config = require('@/config');

const db = new Sequelize(config.db.name, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.type,
});

module.exports = db;