const express = require("express");
const infoRouter = require("./info-route");

const v1Routes = express.Router();

v1Routes.use("/info", infoRouter);

module.exports = v1Routes;
