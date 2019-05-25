
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `keys`. (Can be re-generated.)
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
      alg: {
        title: "Algorithm",
        description: "The specific cryptographic algorithm used with the key.",
        bsonType: "string"
      },
      kty: {
        title: "Family",
        description: "The family of cryptographic algorithms used with the key.",
        bsonType: "string"
      },
      use: {
        title: "Usage",
        description: "How the key was meant to be used; `sig` represents the signature.",
        bsonType: "string"
      },
      x5c: {
        title: "x.509 Chain",
        description: "The x.509 certificate chain. The first entry in the array is the certificate to use for token verification; the other certificates can be used to verify this first certificate.",
        items: {
          type: "string"
        },
        bsonType: "array"
      },
      "n": {
        title: "Modulus",
        description: "The modulus for a standard pem.",
        bsonType: "string"
      },
      "e": {
        title: "Exponent",
        description: "The exponent for a standard pem.",
        bsonType: "string"
      },
      kid: {
        title: "Key ID",
        description: "The unique identifier for the key.",
        bsonType: "objectId"
      },
      x5t: {
        title: "Thumbprint",
        description: "The thumbprint of the x.509 cert (SHA-1 thumbprint).",
        bsonType: "string"
      }
    },
    required: [
      "alg",
      "kty",
      "use",
      "x5c",
      "n",
      "e",
      "kid",
      "x5t"
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
