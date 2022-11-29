module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define(
    "team",
    {
      team_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      flag: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Team;
};
