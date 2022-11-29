module.exports = {
  DATABASE: process.env.DATABASE || "fixtures",
  USERNAME: process.env.USERNAME || "root",
  PASSWORD: process.env.PASSWORD || "123456",
  HOSTNAME: process.env.HOSTNAME || "db",
  DIALECT: process.env.DIALECT || "mysql",

  POOL_MAX: process.env.POOL_MAX || 5,
  POOL_MIN: process.env.POOL_MIN || 0,
  POLL_ACQUIRE: process.env.POLL_ACQUIRE || 30000,
  POLL_IDLE: process.env.POLL_IDLE || 10000,
};
