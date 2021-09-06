const express = require('express');

const app = express();
const sequelize = require('./models');
const PORT = process.env.PORT || 5000;

// Configurer notre serveur pour utiliser ces routeurs
const userRouter = require('./routers/userRouter');
app.use('/user', userRouter);

const productRouter = require('./routers/productRouter');
app.use('/product', productRouter);

const categoryRouter = require('./routers/categoryRouter');
app.use('/category', categoryRouter);

const estimateRouter = require('./routers/estimateRouter');
app.use('/estimate', estimateRouter);

const contactRouter = require('./routers/contactRouter');
app.use('/contact', contactRouter);

const faqRouter = require('./routers/faqRouter');
app.use('/faq', faqRouter);

// Je veux accepter du JSON en envoi d'informations
app.use(express.json());


console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // Synchronise la base de données avec nos modèles
    // sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})