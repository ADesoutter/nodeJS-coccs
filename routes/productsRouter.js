const express = require('express');
const router = express.Router();
const sequelize = require("../models");
const dataProducts = require('../data/dataproduct'); 

// router.post('/products', (req, res) => {
//     sequelize.models.Product
//     res.send(dataProducts)
// });

// router.post('/', (req, res) => {
//     sequelize.models.Product.create(req.body)
//     .then(productCreated => {
//         res.send(productCreated);
//     })
// })

// router.get('/', (req, res) => {
//     sequelize.models.Product.findAll()
//     .then(myProducts => {
//         res.send(myProducts);
//     })
// })

const  { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
} = require('../controllers/productsController')

router.get('/', getProducts)

router.get('/:productID', getProduct)

router.post('/', createProduct) 

router.put('/:productID', updateProduct) 

router.delete('/:productID', deleteProduct)

module.exports = router


// // récupérer tous les catégories
// router.get('/', (req, res) => {
//     sequelize.models.Product.findAll()
//     .then(myProducts => {
//         res.send(myProducts);
//     })
// })
   
// // récupérer une catégorie pour l'id
// router.get('/products', (req, res) => {
//     const id= req.params.id;
//     sequelize.models.Product.findByPk(id)
//     .then(myProduct => {
//         res.send(myProduct);
//     })
// })



module.exports = router;