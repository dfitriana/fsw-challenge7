/**
 * @file Manages database connection configuration.
 * @author Diyah Ayu Fitriana
 */

/** Destruct environment variable to get database configuration */
const { DB_USERNAME = "jilkeiou", DB_PASSWORD = "V7TzxoODuLCQ7dmhalVZ5hQ1BYP2j0xJ", DB_HOST = "tiny.db.elephantsql.com", DB_NAME = "jilkeiou" } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: "postgres",
  },
};
