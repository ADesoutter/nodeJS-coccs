const Product = require('../models/Product')

exports.getAllProducts = (req, res) => {
    sequelize.models.Product.findAll()
    .then(myProducts => {
        res.send(myProducts);
    })
};

exports.getProduct = (req, res) => {
    const id= req.params.id;
    sequelize.models.Product.findByPk(id)
    .then(myProduct => {
        res.send(myProduct);
    })
};

exports.createProduct = (req, res ) => {
    sequelize.models.Product.create(req.body)
    .then(productCreated => {
        res.send(productCreated);
    })
};

exports.updateProduct = (req, res) => {
    sequelize.models.Product.update(req.body, 
        {where: {id : req.params.id} })
    .then(successUpdated => {
        res.send(successUpdated);
    })
};

exports.deleteProduct = (req, res) => {
    sequelize.models.Product.destroy ({
        where:{id: req.params.id}
    }).then(() => {
        res.send({info:"product deleted"})
    })  
};