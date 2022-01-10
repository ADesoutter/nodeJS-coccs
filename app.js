const express = require('express');
const app = express();
const sequelize = require('./models');
const PORT = process.env.PORT || 3080;

app.use(express.json());

console.log('Checking Database connection...');

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    // Synchronise la base de données avec nos modèles
    sequelize.sync({force:true})

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})

.catch((err) => {
    console.log(err);
})