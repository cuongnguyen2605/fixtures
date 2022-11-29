"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const matches = [];
    for (let i = 0; i < 20; i++) {
      matches.push({
        name: "World Cup 2022",
        date: faker.date.between(
          new Date(2022, 10, 20),
          new Date(2022, 11, 18)
        ),
        home_team_id: faker.datatype.number({ min: 1, max: 20 }),
        away_team_id: faker.datatype.number({ min: 1, max: 20 }),
        home_team_goal: faker.datatype.number({ min: 0, max: 10 }),
        away_team_goal: faker.datatype.number({ min: 0, max: 10 }),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return queryInterface.bulkInsert("matches", [...matches]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("matches", null, {});
  },
};
