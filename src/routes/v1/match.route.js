const express = require("express");
const { matchController } = require("../../controllers");

const router = express.Router();

router.get("/find", matchController.find);
router.get("/find-by-dates", matchController.findByDates);

module.exports = router;
