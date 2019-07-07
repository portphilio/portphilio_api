const users = require('./users/users.service.js')
const artifacts = require('./artifacts/artifacts.service.js');
module.exports = function (app) {
  app.configure(users)
  app.configure(artifacts);
}
