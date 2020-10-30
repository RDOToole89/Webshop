"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Roibin",
          lastName: "OToole",
          email: "roibin@gmail.com",
          phone: "0644829842",
          address: "test street 123",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Tim",
          lastName: "de Waard",
          email: "tim@gmail.com",
          phone: "0644829842",
          address: "test street 123",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rein",
          lastName: "op 't land",
          email: "rein@gmail.com",
          phone: "0644829842",
          address: "test street 123",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
