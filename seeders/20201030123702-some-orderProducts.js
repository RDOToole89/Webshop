"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "OrderProducts",
      [
        {
          OrderId: 1,
          ProductId: 2,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          OrderId: 1,
          ProductId: 2,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          OrderId: 1,
          ProductId: 2,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          OrderId: 1,
          ProductId: 2,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("OrderProducts", null, {});
  },
};
