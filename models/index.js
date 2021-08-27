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

Category.hasMany(Quizz);
Quizz.belongsTo(Category);

Quizz.hasMany(Question);
Question.belongsTo(Quizz);

Question.hasMany(Answer);
Answer.belongsTo(Question);

//-------------- Relations end---------------//

module.exports = sequelize;
