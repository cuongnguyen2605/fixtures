const Sequelize = require("sequelize");

const { dbConfig } = require("../config");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOSTNAME,
    dialect: dbConfig.DIALECT,
    pool: {
      max: dbConfig.POOL_MAX,
      min: dbConfig.POOL_MIN,
      acquire: dbConfig.POLL_ACQUIRE,
      idle: dbConfig.POLL_IDLE,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.match = require("./match.model")(sequelize, Sequelize);
db.team = require("./team.model")(sequelize, Sequelize);

db.match.belongsTo(db.team, {
  foreignKey: "home_team_id",
  as: "home_team",
});
db.match.belongsTo(db.team, {
  foreignKey: "away_team_id",
  as: "away_team",
});

db.team.hasOne(db.match, {
  foreignKey: "home_team_id",
  as: "home_team",
});
db.team.hasOne(db.match, {
  foreignKey: "away_team_id",
  as: "away_team",
});

module.exports = db;
