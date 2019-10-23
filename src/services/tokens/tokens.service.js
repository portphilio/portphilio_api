// Initializes the `tokens` service on path `/tokens`
const createService = require('./tokens.class')
const hooks = require('./tokens.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  let { clientId, clientSecret } = app.get('google')

  const options = {
    paginate,
    clientId,
    clientSecret
  }

  // Initialize our service with any options it requires
  app.use('/tokens', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('tokens')

  service.hooks(hooks)
}
