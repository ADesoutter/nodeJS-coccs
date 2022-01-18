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


// // //créer des formulaires de contact en API
// router.post('http://localhost:3000/api/mail', (req, res) => {
//     console.log(req.body);
//     sequelize.models.Contact.create(req.body)
//     .then(contactCreated => {
//         res.send(contactCreated);
//     })
// })

module.exports = router;