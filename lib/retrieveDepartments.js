const db = require("../config/connection.js");

async function retrieveEmployee() {
  const data = await db.promise().query("SELECT * FROM employee");
  const employeeList = data[0].map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,
  }));
  employeeList.push({ name: "NONE", value: 0 });
  return employeeList;
}

module.exports = retrieveEmployee;
