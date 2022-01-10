const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.User.findAll()
    .then(myUsers => {
        res.send(myUsers);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.User.findByPk(id)
    .then(myUser => {
        res.send(myUser);
    })
})

module.exports = router;

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