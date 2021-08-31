const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Estimate.findAll()
    .then(myEstimates => {
        res.send(myEstimates);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/:id', (req, res) => {
    const id= req.params.id;
    sequelize.models.Estimate.findByPk(id)
    .then(myEstimate => {
        res.send(myEstimate);
    })
})

module.exports = router;