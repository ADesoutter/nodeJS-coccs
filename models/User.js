const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('User', {
    lastname: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hospital: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    function: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
 }, {
     tableName: 'user',
     underscored: true
 })