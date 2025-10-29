const { ServerConfig, Logger } = require("./config");

const express = require("express");
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Express Server is Running on PORT ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server ", {});
});
