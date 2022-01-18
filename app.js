const express = require('express');
const app = express();
const sequelize = require('./models');
const products = require('./data/dataproduct')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csrf = require("csurf")
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })

app.get('/form', csrfProtection, function (req, res) {
    res.send({csrfToken: req.csrfToken()})
})

app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})


const usersRouter = require('./router/usersRouter');
app.use('/users', usersRouter);

const productsRouter = require('./router/productsRouter');
app.use('/api/products', productsRouter);

// const categoriesRouter = require('./router/categoriesRouter');
// app.use('/categories', categoriesRouter);

// const estimatesRouter = require('./router/estimatesRouter');
// app.use('/estimates', estimatesRouter);

// const contactsRouter = require('./router/contactsRouter');
// app.use('/contacts', contactsRouter);

// const faqsRouter = require('./router/faqsRouter');
// app.use('/faqs', faqsRouter);

app.use(express.json());

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})

module.exports = app;