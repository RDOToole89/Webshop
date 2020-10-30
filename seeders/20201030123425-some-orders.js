"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
