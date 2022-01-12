'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(Product);
      Product.belongsTo(Category);

      User.belongsToMany(Product, {through: "user_product"});
      Product.belongsToMany(User, {through: "user_product"});
    }
  };
  Product.init({
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
    sequelize,
    tableName: 'product',
    modelName: 'product',
  });
  return Product;
};