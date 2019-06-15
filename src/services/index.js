
// Configure the Feathers services. (Can be re-generated.)
let artifacts = require('./artifacts/artifacts.service')
let keys = require('./keys/keys.service')
let tokens = require('./tokens/tokens.service')
let users = require('./users/users.service')

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(artifacts)
  app.configure(keys)
  app.configure(tokens)
  app.configure(users)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
