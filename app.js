const express = require('express');
const app = express();
const sequelize = require('./models');
const products = require('./data/dataproduct')
const PORT = process.env.PORT || 3080;

// // Configurer notre serveur pour utiliser ces routeurs
// const usersRouter = require('./routes/usersRouter');
// app.use('/users', usersRouter);

const productsRouter = require('./routes/productsRouter');
app.use('/api/products', productsRouter);

// const categoriesRouter = require('./routes/categoriesRouter');
// app.use('/categories', categoriesRouter);

// const estimatesRouter = require('./routes/estimatesRouter');
// app.use('/estimates', estimatesRouter);

// const contactsRouter = require('./routes/contactsRouter');
// app.use('/contacts', contactsRouter);

// const faqsRouter = require('./routes/faqsRouter');
// app.use('/faqs', faqsRouter);

app.use(express.json());

app.get('/api/products', (req,res) => {
    res.json(products)
})

// app.post('api/products', (req,res) => {
//     const newProduct = {
//         id: products.length + 1,
//         name: req.body.name,
//         ref_number: req.body.ref_number,
//         indication: req.body.indication,
//         site_utilisation: req.body.site_utilisation,
//     }
//     products.push(newProduct)
//     res.status(201).json(newProduct)
// })

// app.get('api/products/:productID', (req,res) => {
//     const id = Number(req.params.productID)
//     const product = products.find(product => product.id === id)

//     if(!product) {
//         return res.status(404).send('Product Not Found')
//     }
//     res.json(product)
// })

// app.put('/api/products/:productID', (req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//     if (index === -1) {
//         return res.status(404).send('Product not found')
//     }
//     const updatedProduct = {
//         id: products[index].id,
//         name: req.body.name,
//         ref_number: req.body.ref_number,
//         indication: req.body.indication,
//         site_utilisation: req.body.site_utilisation,
//     }
//     products[index] = updatedProduct
//     res.status(200).json('Product updated')
// })


// app.delete('/api/products/:productID', (req, res) => {
//     const id = Number(req.params.productID)
//     const index = products.findIndex(product => product.id === id)
//         if (index === -1) {
//         return res.status(404).send('Product not found')
//     }
//     products.splice(index,1)
//     res.status(200).json('Product deleted')
// })



console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})