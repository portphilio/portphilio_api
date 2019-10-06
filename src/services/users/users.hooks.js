const search = require('../../hooks/search')
module.exports = {
  before: {
    all: [],
    find: [
      ctx => {
        if (ctx.params.query.$limit === '-1') {
          ctx.params.paginate = false
          delete ctx.params.query.$limit
        }
      },
      search()
    ],
    get: [],
    create: [],
    update: [],
    patch: [
      context => {
        context.params.mongoose = {
          upsert: true,
          writeResult: true
        }
        return context
      }
    ],
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
