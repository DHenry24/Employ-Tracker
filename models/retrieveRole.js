const db = require("../config/connection.js");

async function retrieveRole() {
  const data = await db.promise().query("SELECT * FROM role");
  return data[0].map((role) => ({ name: role.title, value: role.id }));
}

module.exports = retrieveRole;
