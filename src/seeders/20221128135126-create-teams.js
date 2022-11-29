"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("teams", [
      {
        name: "Qatar",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ecuador",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Senegal",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Netherlands",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "England",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Iran",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "USA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wales",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Argentina",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Saudi Arabia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mexico",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Poland",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "France",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Australia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Denmark",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Tunisia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Spain",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Costa Rica",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Germany",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Japan",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("teams", null, {});
  },
};
