const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Contact', {
    lastname: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    company: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    subject: {
        type: DataTypes.TEXT,
        allowNull: false
    },
 }, {
     tableName: 'contact',
     underscored: true,
     timestamp: false
 })