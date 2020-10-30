"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "football",
          description: "a football is round",
          price: 14.5,
          imgUrl: "http://someimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "basketball",
          description: "a basketball is also round",
          price: 19.5,
          imgUrl: "http://someimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "tennisball",
          description: "a tennisball is round",
          price: 10.5,
          imgUrl: "http://someimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
