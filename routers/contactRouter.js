const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Product.findAll()
    .then(myProducts => {
        res.send(myProducts);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.User.findByPk(id)
    .then(myProduct => {
        res.send(myProduct);
    })
})

module.exports = router;