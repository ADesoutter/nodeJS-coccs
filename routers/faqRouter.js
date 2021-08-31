const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Faq.findAll()
    .then(myFaqs => {
        res.send(myFaqs);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Faq.findByPk(id)
    .then(myFaq => {
        res.send(myFaq);
    })
})

module.exports = router;