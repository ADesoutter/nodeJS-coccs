const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Estimate', {
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
    product: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
 }, {
     tableName: 'estimate',
     underscored: true,
     timestamps : false
 })