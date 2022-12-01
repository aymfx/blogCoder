const promisesAplusTests = require("promises-aplus-tests");

const adapter = require("./Mypromise")

promisesAplusTests(adapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
});
