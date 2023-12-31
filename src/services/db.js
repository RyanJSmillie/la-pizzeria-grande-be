const { Sequelize } = require("sequelize");

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

module.exports = async () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    logging: false,
  });

  return connection;
};
