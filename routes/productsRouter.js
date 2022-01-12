const express = require('express');
const router = express.Router();
const sequelize = require("../models");

// const {
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// } = require('../controllers/products')

// router.get('/api/products', (req, res) => {
//     res.json(products)
// })

// router.get('/', getProducts)

// router.get('/:id', getProduct)

// router.post('/', createProduct)

// router.put('/:id', updateProduct)

// router.delete('/:id', deleteProduct)

// récupérer tous les catégories
router.get('/', (req, res) => {
    sequelize.models.Product.findAll()
    .then(myProducts => {
        res.send(myProducts);
    })
})
   
// récupérer une catégorie pour l'id
router.get('/products', (req, res) => {
    const id= req.params.id;
    sequelize.models.Product.findByPk(id)
    .then(myProduct => {
        res.send(myProduct);
    })
})



module.exports = router;