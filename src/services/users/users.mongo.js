
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `users`. (Can be re-generated.)
const merge = require('lodash.merge')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      user_id: {
        title: "Auth0 UserID",
        description: "The user_id from Auth0 for this member.",
        bsonType: "string"
      },
      currentToken: {
        title: "currentToken",
        description: "The most recent valid token associated with a member.",
        bsonType: "string"
      },
      githubAPIToken: {
        title: "GitHub API Token",
        description: "Allows our app to modify the user's GitHub repos",
        bsonType: "string"
      }
    },
    required: [
      "user_id"
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
