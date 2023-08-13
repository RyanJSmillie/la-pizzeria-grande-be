const express = require("express");
const app = express();

const menuRouter = require("./routes/menu");

app.use(express.json());
app.use("/menu", menuRouter);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

module.exports = app;
