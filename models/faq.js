'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Faq.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
  }, {
    sequelize,
    tableName: 'faq',
    modelName: 'faq',
  });
  return Faq;
};