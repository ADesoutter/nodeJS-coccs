const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
const sequelize = require('./models');
const PORT = process.env.PORT || 5000;

// Configurer notre serveur pour utiliser ces routeurs
const usersRouter = require('./routers/usersRouter');
app.use('/users', usersRouter);

const productsRouter = require('./routers/productsRouter');
app.use('/products', productsRouter);

const categoriesRouter = require('./routers/categoriesRouter');
app.use('/categories', categoriesRouter);

const estimatesRouter = require('./routers/estimatesRouter');
app.use('/estimates', estimatesRouter);

const contactsRouter = require('./routers/contactsRouter');
app.use('/contacts', contactsRouter);

const faqsRouter = require('./routers/faqsRouter');
app.use('/faqs', faqsRouter);

// Je veux accepter du JSON en envoi d'informations
app.use(express.json());

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    // console.log("Database connection OK!");
    // // Synchronise la base de données avec nos modèles
    // sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})