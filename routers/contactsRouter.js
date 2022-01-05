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

// //créer des formulaires de contact en API
router.post('http://localhost:3000/api/form', (req, res) => {
    console.log(req.body);
    sequelize.models.Contact.create(req.body)
    .then(contactCreated => {
        res.send(contactCreated);
    })
})

module.exports = router;