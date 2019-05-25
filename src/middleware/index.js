
// Configure middleware. (Can be re-generated.)
const authorize = require('./authorize')
// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  // !code: func_init // !end
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  // Your middleware should include:
  //   app.use(authorize())
  // !<DEFAULT> code: middleware
  app.use(authorize())
  // !end
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
