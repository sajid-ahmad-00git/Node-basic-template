const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    Success: true,
    Message: "Api is LIVE",
    Error: {},
    Data: {},
  });
};

module.exports = { info };
