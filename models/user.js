'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(Product, {through: "user_product"});
      Product.belongsToMany(User, {through: "user_product"});
    }
  };
  User.init({
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
    sequelize,
    tableName: 'user',
    modelName: 'user',
  });
  return User;
};