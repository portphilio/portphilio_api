
/* eslint quotes: 0 */
// Defines Mongoose model for service `keys`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    alg: {
      type: String,
      required: true
    },
    kty: {
      type: String,
      required: true
    },
    use: {
      type: String,
      required: true
    },
    x5c: {
      type: [
        String
      ],
      required: true
    },
    "n": {
      type: String,
      required: true
    },
    "e": {
      type: String,
      required: true
    },
    kid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true
    },
    x5t: {
      type: String,
      required: true
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
