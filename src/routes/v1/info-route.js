const express = require("express");
const { InfoController } = require("../../controllers");

const infoRouter = express.Router();

infoRouter.get("/", InfoController.info);

module.exports = infoRouter;
