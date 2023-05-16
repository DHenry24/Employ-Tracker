const db = require("./config/connection.js");
const selectTask = require("./models/selectTask.js");

// handle errors or start application
db.connect(function (err) {
  if (err) throw err;
  init();
});

// start application, show title special-text and present task list prompt (using 'selectTask')
function init() {
  selectTask();
}
