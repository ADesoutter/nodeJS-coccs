const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

// Je suis en local
if(!process.env.NODE_ENV)
{
    // CHaque variable dans le .env en local devient
    // une variable process.env.LENOMDEMAVAR
    dotenv.config(); 
}
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const Category = require('./Category')(sequelize);

//-------------- Relations start---------------//

Category.hasMany(Product);
Product.belongsTo(Category);

User.belongsToMany(Product, {through: "user_product"});
Product.belongsToMany(User, {through: "user_product"});

//-------------- Relations end---------------//

module.exports = sequelize;
