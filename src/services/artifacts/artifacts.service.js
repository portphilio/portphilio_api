// Initializes the `artifacts` service on path `/artifacts`
const createService = require('feathers-mongoose')
const createModel = require('../../models/artifacts.model')
const hooks = require('./artifacts.hooks')

module.exports = app => {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/artifacts', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('artifacts')

  service.hooks(hooks)
}
