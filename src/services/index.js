
// Configure the Feathers services. (Can be re-generated.)
let keys = require('./keys/keys.service')
let users = require('./users/users.service')

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(keys)
  app.configure(users)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
