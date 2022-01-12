const express = require('express');
const app = express();
const sequelize = require('./models');
const products = require('./data/dataproduct'); 
const PORT = process.env.PORT || 3080;

app.get('/api/products', (req, res) => {
    res.json(products)
});

// Configurer notre serveur pour utiliser ces routeurs
const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

const productsRouter = require('./routes/productsRouter');
app.use('/products', productsRouter);

const categoriesRouter = require('./routes/categoriesRouter');
app.use('/categories', categoriesRouter);

const estimatesRouter = require('./routes/estimatesRouter');
app.use('/estimates', estimatesRouter);

const contactsRouter = require('./routes/contactsRouter');
app.use('/contacts', contactsRouter);

const faqsRouter = require('./routes/faqsRouter');
app.use('/faqs', faqsRouter);

// Je veux accepter du JSON en envoi d'informations
app.use(express.json());

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // Synchronise la base de données avec nos modèles
    sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})