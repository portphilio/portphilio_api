
// Initializes the `tokens` service on path `/tokens`. (Can be re-generated.)
const createService = require('./tokens.class')
const hooks = require('./tokens.hooks')
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {

  let paginate = app.get('paginate')
  // !code: func_init
  let { clientId, clientSecret } = app.get('google')
  // !end

  let options = {
    paginate,
    // !code: options_more
    clientId,
    clientSecret
    // !end
  }
  // !code: options_change // !end

  // Initialize our service with any options it requires
  // !<DEFAULT> code: extend
  app.use('/tokens', createService(options))
  // !end

  // Get our initialized service so that we can register hooks
  const service = app.service('tokens')

  service.hooks(hooks)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
