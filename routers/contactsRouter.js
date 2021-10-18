const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Contact.findAll()
    .then(myContacts => {
        res.send(myContacts);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Contact.findByPk(id)
    .then(myContact => {
        res.send(myContact);
    })
})

module.exports = router;