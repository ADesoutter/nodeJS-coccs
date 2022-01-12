'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ref_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      indication: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      site_utilisation: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      // category_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: 'category',
      //     },
      //     key: 'id'
      //   },
      //   allowNull: false
      // },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};