const products = require('../data')
const Product = require('../models/Product')

const getProducts = ((req, res) => {
    res.json(products)
})

const getProduct = ((req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id === id)
    // sequelize.models.Product.findByPk(id)

        if(!product) {
            return res.status(404).send('Product not found')
        }
    res.json(product)
})

const createProduct = ((req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        ref_number: req.body.ref_number,
        indication: req.body.indication,
        site_utilisation: req.body.site_utilisation,
        // category_id: req.body.category_id
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

module.exports = {
    getProducts,
    getProduct,
    createProduct
}