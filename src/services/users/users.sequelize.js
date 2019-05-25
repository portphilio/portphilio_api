
/* eslint quotes: 0 */
// Defines Sequelize model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    user_id: {
      description: "The user_id from Auth0 for this member.",
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    currentToken: {
      description: "The most recent valid token associated with a member.",
      type: DataTypes.TEXT
    },
    githubAPIToken: {
      description: "Allows our app to modify the user's GitHub repos",
      type: DataTypes.TEXT
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
