const express = require("express");
const matchRoute = require("./match.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/matches",
    route: matchRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
