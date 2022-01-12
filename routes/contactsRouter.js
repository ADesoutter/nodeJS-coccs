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
router.post('http://localhost:3000/api/mail', (req, res) => {
    console.log(req.body);
    sequelize.models.Contact.create(req.body)
    .then(contactCreated => {
        res.send(contactCreated);
    })
})

// place holder for the data
// const users = [];

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/out')));

// app.get('/api/users', (req, res) => {
//   console.log('api/users called!')
//   res.json(users);
// });

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
// });


module.exports = router;