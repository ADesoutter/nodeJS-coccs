const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

if(!process.env.NODE_ENV)
{
    dotenv.config(); 
}
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const Category = require('./Category')(sequelize);
const Estimate = require('./Estimate')(sequelize);
const Contact = require('./Contact')(sequelize);
const Faq = require('./Faq')(sequelize);

//-------------- Relations start---------------//

Category.hasMany(Product);
Product.belongsTo(Category);

User.belongsToMany(Product, {through: "user_product"});
Product.belongsToMany(User, {through: "user_product"});

//-------------- Relations end---------------//

module.exports = sequelize;
