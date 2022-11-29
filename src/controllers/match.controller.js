const httpStatus = require("http-status");
const { matchService } = require("../services");

const find = async (req, res) => {
  try {
    const matches = await matchService.find(req.query);

    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: httpStatus[200],
      data: matches,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: httpStatus[500],
    });
  }
};

const findByDates = async (req, res) => {
  try {
    const matches = await matchService.findByDates(req.query);

    res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: httpStatus[200],
      data: matches,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: httpStatus[500],
    });
  }
};

module.exports = { find, findByDates };
