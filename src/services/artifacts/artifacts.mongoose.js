
/* eslint quotes: 0 */
// Defines Mongoose model for service `artifacts`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    uri: String,
    narrative: String,
    status: {
      type: String,
      enum: [
        "draft",
        "complete",
        "work-in-progress",
        "idea",
        "will-not-complete"
      ]
    },
    tags: [
      String
    ],
    notes: [
      {
        note: String,
        done: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
