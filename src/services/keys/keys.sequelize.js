
/* eslint quotes: 0 */
// Defines Sequelize model for service `keys`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    alg: {
      description: "The specific cryptographic algorithm used with the key.",
      type: DataTypes.TEXT,
      allowNull: false
    },
    kty: {
      description: "The family of cryptographic algorithms used with the key.",
      type: DataTypes.TEXT,
      allowNull: false
    },
    use: {
      description: "How the key was meant to be used; `sig` represents the signature.",
      type: DataTypes.TEXT,
      allowNull: false
    },
    x5c: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    "n": {
      description: "The modulus for a standard pem.",
      type: DataTypes.TEXT,
      allowNull: false
    },
    "e": {
      description: "The exponent for a standard pem.",
      type: DataTypes.TEXT,
      allowNull: false
    },
    kid: {
      description: "The unique identifier for the key.",
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    x5t: {
      description: "The thumbprint of the x.509 cert (SHA-1 thumbprint).",
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
