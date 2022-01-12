'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estimate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Estimate.init({
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
    sequelize,
    tableName: 'estimate',
    modelName: 'estimate',
  });
  return Estimate;
};