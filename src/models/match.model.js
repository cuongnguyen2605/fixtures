module.exports = (sequelize, Sequelize) => {
  const Match = sequelize.define(
    "match",
    {
      match_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      home_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      home_team_goal: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      away_team_goal: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Match;
};
