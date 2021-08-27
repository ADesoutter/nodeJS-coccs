// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Category', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    function: {
        type: DataTypes.TEXT,
        allowNull: true
    }
 }, {
     tableName: 'category',
     underscored: true
 })