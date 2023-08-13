const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./services/db");

const menuRouter = require("./routes/menu");

app.use(express.json());
app.use(cors());
app.use("/menu", menuRouter);

app.get("/test", async (req, res) => {
  const connection = await db();

  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
    res.sendStatus(200);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  connection.close();
});

module.exports = app;
