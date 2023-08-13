const db = require("../services/db");

const { QueryTypes } = require("sequelize");

exports.getAll = async (_, res) => {
  const connection = await db();

  try {
    const [drinks] = await connection.query("SELECT * FROM Drinks");
    res.status(200).json(drinks);
  } catch (e) {
    res.status(400).json(e.messages);
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
      "INSERT INTO Drinks(title, description, price, img) VALUES($1, $2, $3, $4) RETURNING *",
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
    await connection.query("DELETE FROM Drinks WHERE id = $1 RETURNING *", {
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
    await connection.query("DELETE FROM Drinks WHERE title = $1 RETURNING *", {
      bind: [title],
      type: QueryTypes.DELETE,
    });
    res.status(200).send("Entry deleted");
  } catch (e) {
    res.status(400).json(e.message);
  }
};

exports.updatePriceById = async (req, res) => {
  const connection = await db();
  const { id } = req.params;
  const { price } = req.body;

  try {
    await connection.query("UPDATE Drinks SET price = $1 WHERE id = $2", {
      bind: [price, id],
      type: QueryTypes.UPDATE,
    });
    res.status(200).send("Price updated");
  } catch (e) {
    res.status(400).json(e.message);
  }
};
