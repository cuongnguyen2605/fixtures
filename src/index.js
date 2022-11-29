require("dotenv").config();

const app = require("./app");
const db = require("../src/models");
const PORT = process.env.PORT || 3000;

let server;

db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected.");
    server = app.listen(PORT, () => console.log(`Listening to port ${PORT}.`));
  })
  .catch((error) => console.log("Fail to connect database: ", error.message));

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
