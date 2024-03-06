const db = require('@/database/db');
const { DataTypes } = require('sequelize');

const BlogModel = db.define("blogs", {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
});

module.exports = BlogModel;