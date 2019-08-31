const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 1488;

app.use("/api/v1", require("./routes/api"));

app.listen(PORT, () => console.log(`We are on http://localhost:${PORT}`));
