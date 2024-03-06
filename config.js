require('dotenv').config();

module.exports = {
    app: {
        port: process.env.APP_PORT || 4000,
    },

    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'test',
        port: process.env.DB_PORT || 3306,
        type: process.env.DB_DIALECT || 'mysql',
    },

    development: {
        username:   process.env.DB_USER || 'root',
        password:   process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'test',
        host:  process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
    },

    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },

    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql"
    }
}