const { Op } = require("sequelize");
const moment = require("moment");

const db = require("../models");
const { getPagingData } = require("../utils");

const matchAttributes = [
  "match_id",
  "name",
  "date",
  "home_team_goal",
  "away_team_goal",
];

const teamAttributes = ["team_id", "name", "flag"];

const orders = [["date", "ASC"]];

const includes = [
  {
    model: db.team,
    as: "home_team",
    attributes: teamAttributes,
  },
  {
    model: db.team,
    as: "away_team",
    attributes: teamAttributes,
  },
];

/**
 *
 * @param { page, limit } params
 * @returns
 */
const find = async (params) => {
  const radix = 10;
  const page = parseInt(params.page || 1, radix);
  const limit = parseInt(params.limit || 10, radix);
  const offset = page * limit - limit;

  const query = {
    limit,
    offset,
    attributes: matchAttributes,
    order: orders,
    include: includes,
  };

  const matches = await db.match.findAndCountAll(query);
  return getPagingData(matches, page, limit);
};

/**
 *
 * @param { from, to } params
 * @returns
 */
const findByDates = async (params) => {
  const from = params.from ? moment(params.from) : moment();
  const to = params.to ? moment(params.to) : moment();

  const query = {
    where: {
      date: {
        [Op.between]: [from.startOf("day").format(), to.endOf("day").format()],
      },
    },
    attributes: matchAttributes,
    order: orders,
    include: includes,
  };

  const matches = await db.match.findAll(query);
  return matches;
};

module.exports = {
  find,
  findByDates,
};
