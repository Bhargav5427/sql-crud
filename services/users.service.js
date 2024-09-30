const pool = require("../db/connectPG");

const postUser = async (body) => {
  const { name, email, age } = body;
  try {
    const query = `
      insert into users (name, email, age)
      values ('${name}', '${email}', ${age})
      returning *;
    `;
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error inserting user: ${error.message}`);
  }
};

let getUser = () => {
  try {
    return pool.query(`select * from users`);
  } catch (error) {
    return error;
  }
};

let deleteUser = async (id) => {
  try {
    const query = `delete from users where id=${id} returning *`;
    let result = await pool.query(query);
    return result.rows[0] || null;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

let updateUser = async (id, body) => {
  try {
    let { name, email, age } = body;
    const query = `UPDATE users SET name = '${name}', email = '${email}', age = '${age}' WHERE id = '${id}' RETURNING *`;
    let result = await pool.query(query);
    return result.rows[0] || null;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

module.exports = {
  postUser,
  getUser,
  deleteUser,
  updateUser,
};
