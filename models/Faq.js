const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Faq', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
 }, {
     tableName: 'faq',
     underscored: true,
     timestamp: false
 })