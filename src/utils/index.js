const getPagingData = (data, page, limit) => {
  const { count: totalDocs, rows: docs } = data;
  const totalPages = Math.ceil(totalDocs / limit);

  return { docs, totalDocs, limit, page, totalPages };
};

module.exports = {
  getPagingData,
};
