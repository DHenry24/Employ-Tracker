const db = require("../config/connection.js");
const selectTask = require("./selectTask.js");

async function updateEmployeeRole(response) {
  await db.promise().query(
    `
    UPDATE employee SET role_id = ? WHERE id = ?
  `,
    [response.updateRole, response.updateEmployee]
  );
  console.log("\u001b[36;1m", `Employee role updated!`);
  selectTask();
}

module.exports = updateEmployeeRole;
