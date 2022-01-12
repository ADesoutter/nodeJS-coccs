const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Category', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    function: {
        type: DataTypes.TEXT,
        allowNull: false
    }
 }, {
     tableName: 'category',
     underscored: true,
     timestamps : false
 })