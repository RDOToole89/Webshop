"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "football",
          description: "footbal yey!",
          imgUrl: "image.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tennis",
          description: "tennis yey!",
          imgUrl: "image.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "basketball",
          description: "basketball yey!",
          imgUrl: "image.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
