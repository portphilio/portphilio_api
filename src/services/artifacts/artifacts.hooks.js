
// Hooks for service `artifacts`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
// !code: imports
const search = require('../../hooks/search')
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./artifacts.validate')
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // !code: before
    all: [],
    find: [
      search(),
      context => {
        // allow disabling pagination to retrieve ALL artifacts
        if (context.params.query.$limit === -1) {
          context.params.paginate = false
          delete context.params.query.$limit
        }
        return context
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  after: {
    // !<DEFAULT> code: after
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
