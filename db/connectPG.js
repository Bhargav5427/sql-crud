let { Pool } = require("pg");

let pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myDB",
  password: "root1",
  port: 5432,
});

module.exports = pool;
