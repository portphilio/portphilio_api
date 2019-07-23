module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      hook => {
        hook.params.s3 = {
          ACL: 'public-read'
        }
      }
    ],
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
