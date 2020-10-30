"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CategoryProducts",
      [
        {
          productId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CategoryProducts", null, {});
  },
};
