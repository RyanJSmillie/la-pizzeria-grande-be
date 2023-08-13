const db = require("../services/db");

const { QueryTypes } = require("sequelize");

exports.test = async (req, res) => {
  const connection = await db();

  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
    res.sendStatus(200);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  connection.close();
};

exports.getAll = async (_, res) => {
  const connection = await db();

  try {
    const [pizzas] = await connection.query("SELECT * FROM Pizza");
    res.status(200).json(pizzas);
  } catch (e) {
    res.status(400).json(e.message);
  }

  connection.close();
};

exports.put = async (req, res) => {
  const connection = await db();

  const { title, description, price, img } = req.body;
  const data = [title, description, price, img];

  console.log(data);

  try {
    await connection.query(
      "INSERT INTO Pizza(title, description, price, img) VALUES($1, $2, $3, $4) RETURNING *",
      {
        bind: data,
        type: QueryTypes.INSERT,
      }
    );
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }

  connection.close();
};

exports.deleteById = async (req, res) => {
  const connection = await db();
  const { id } = req.params;

  try {
    await connection.query("DELETE FROM Pizza WHERE id = $1 RETURNING *", {
      bind: [id],
      type: QueryTypes.DELETE,
    });
    res.status(200).send("Entry deleted");
  } catch (e) {
    res.status(400).json(e.message);
  }
};

exports.deleteByTitle = async (req, res) => {
  const connection = await db();
  const { title } = req.params;

  console.log(title);

  try {
    await connection.query("DELETE FROM Pizza WHERE title = $1 RETURNING *", {
      bind: [title],
      type: QueryTypes.DELETE,
    });
    res.status(200).send("Entry deleted");
  } catch (e) {
    res.status(400).json(e.message);
  }
};
