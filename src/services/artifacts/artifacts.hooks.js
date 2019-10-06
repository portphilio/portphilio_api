const search = require('../../hooks/search')

module.exports = {
  before: {
    all: [],
    find: [
      context => {
        // allow disabling pagination to retrieve ALL artifacts
        if (context.params.query.$limit === '-1') {
          context.params.paginate = false
          delete context.params.query.$limit
        }
        return context
      },
      search()
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
