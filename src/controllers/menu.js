const db = require("../services/db");

exports.getAll = async (req, res) => {
  const connection = await db();

  try {
    const [pizza] = await connection.query("SELECT * FROM Pizza");
    const [drinks] = await connection.query("SELECT * FROM Drinks");
    res.status(200).json({ pizza, drinks });
  } catch (e) {
    res.status(400).json(e.message);
  }

  connection.close();
};
