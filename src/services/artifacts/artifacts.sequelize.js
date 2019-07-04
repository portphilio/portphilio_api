
/* eslint quotes: 0 */
// Defines Sequelize model for service `artifacts`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    name: {
      description: "A descriptive name for the artifact",
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      description: "The owner of the artifact",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      description: "A \"local\" ID for the artifact",
      type: DataTypes.TEXT
    },
    uri: {
      description: "A publicly-accessable URI for the artifact",
      type: DataTypes.TEXT
    },
    narrative: {
      description: "A story to help people understand the meaning and significance of the artifact",
      type: DataTypes.TEXT
    },
    status: {
      description: "Indicates the stage of completion for the artifact, e.g. draft, work-in-progress, complete, etc.",
      type: Sequelize.ENUM(["draft","complete","work-in-progress","idea","will-not-complete"])
    },
    tags: {
      type: DataTypes.JSONB
    },
    notes: {
      type: DataTypes.JSONB
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
