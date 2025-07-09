const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = new Sequelize(
    process.env.DB_NAME, // DB name
    process.env.DB_USER, // DB user
    process.env.DB_PASSWORD, // DB password
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;
