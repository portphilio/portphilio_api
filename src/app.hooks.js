// Application hooks that run for every service
const { isProvider, unless } = require('feathers-hooks-common')

const log = require('./hooks/log')
const auth0Sanitize = require('./hooks/auth0-sanitize')

module.exports = {
  before: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ log() ],
    find: [ unless(isProvider('server')), auth0Sanitize() ],
    get: [ unless(isProvider('server')), auth0Sanitize() ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ log() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
