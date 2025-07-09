const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Students = sequelize.define('Student', {
    rollno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addmission_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year_of_study: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year_of_passing: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Students;
