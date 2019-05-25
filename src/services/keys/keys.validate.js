
/* eslint quotes: 0 */
// Validation definitions for validateSchema hook for service `keys`. (Can be re-generated.)
const { validateSchema } = require('feathers-hooks-common')
const merge = require('lodash.merge')
const ajv = require('ajv')
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: set_id_type
// eslint-disable-next-line no-unused-vars
const ID = 'integer'
// !end

let base = merge({},
  // !<DEFAULT> code: base
  {
    title: "Keys",
    description: "Keys database.",
    required: [
      "alg",
      "kty",
      "use",
      "x5c",
      "n",
      "e",
      "kid",
      "x5t"
    ],
    uniqueItemProperties: [
      "kid"
    ],
    properties: {
      alg: {
        title: "Algorithm",
        description: "The specific cryptographic algorithm used with the key.",
        type: "string"
      },
      kty: {
        title: "Family",
        description: "The family of cryptographic algorithms used with the key.",
        type: "string"
      },
      use: {
        title: "Usage",
        description: "How the key was meant to be used; `sig` represents the signature.",
        type: "string"
      },
      x5c: {
        title: "x.509 Chain",
        description: "The x.509 certificate chain. The first entry in the array is the certificate to use for token verification; the other certificates can be used to verify this first certificate.",
        type: "array",
        items: {
          type: "string"
        }
      },
      "n": {
        title: "Modulus",
        description: "The modulus for a standard pem.",
        type: "string"
      },
      "e": {
        title: "Exponent",
        description: "The exponent for a standard pem.",
        type: "string"
      },
      kid: {
        title: "Key ID",
        description: "The unique identifier for the key.",
        type: ID
      },
      x5t: {
        title: "Thumbprint",
        description: "The thumbprint of the x.509 cert (SHA-1 thumbprint).",
        type: "string"
      }
    }
  },
  // !end
  // !code: base_more // !end
)
// !code: base_change // !end

let create = merge({},
  base,
  // !code: create_more // !end
)

let update = merge({},
  base,
  // !code: update_more // !end
)

let patch = merge({},
  base,
  // !code: patch_more // !end
)
delete patch.required
// !code: all_change // !end

let validateCreate = options => {
  // !<DEFAULT> code: func_create
  return validateSchema(create, ajv, options)
  // !end
}

let validateUpdate = options => {
  // !<DEFAULT> code: func_update
  return validateSchema(update, ajv, options)
  // !end
}

let validatePatch = options => {
  // !<DEFAULT> code: func_patch
  return validateSchema(patch, ajv, options)
  // !end
}

let quickValidate = (method, data, options) => {
  try {
    if (method === 'create') { validateCreate(options)({ type: 'before', method: 'create', data }) }
    if (method === 'update') { validateCreate(options)({ type: 'before', method: 'update', data }) }
    if (method === 'patch') { validateCreate(options)({ type: 'before', method: 'patch', data }) }
  } catch (err) {
    return err
  }
}
// !code: validate_change // !end

let moduleExports = {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
  quickValidate,
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
