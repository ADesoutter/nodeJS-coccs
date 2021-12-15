const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Product', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    ref_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    indication: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    site_utilisation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
 }, {
     tableName: 'product',
     underscored: true,
     timestamps : false
 })