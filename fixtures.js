const sequelize = require("./models");
const faker = require('faker');

console.log('Checking Database connection...');

// function generateProducts() {
//         sequelize.models.Product.create({
//             name: ,
//             ref_number: ,
//             indication: ,
//             site_utilisation: ,
//         })
//     }
// }

sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    sequelize.sync({force: true})
    .then(()=> {
        generateProducts();

    });
})
.catch((err) => {
    console.log(err);
})