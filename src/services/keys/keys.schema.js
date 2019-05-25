
// Define the Feathers schema for service `keys`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Keys',
  description: 'Keys database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'alg',
    'kty',
    'use',
    'x5c',
    'n',
    'e',
    'kid',
    'x5t'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique
    'kid'
    // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    'alg': {
      'title': 'Algorithm',
      'description': 'The specific cryptographic algorithm used with the key.',
      'type': 'string'
    },
    'kty': {
      'title': 'Family',
      'description': 'The family of cryptographic algorithms used with the key.',
      'type': 'string'
    },
    'use': {
      'title': 'Usage',
      'description': 'How the key was meant to be used; `sig` represents the signature.',
      'type': 'string'
    },
    'x5c': {
      'title': 'x.509 Chain',
      'description': 'The x.509 certificate chain. The first entry in the array is the certificate to use for token verification; the other certificates can be used to verify this first certificate.',
      'type': 'array',
      'items': {
        'type': 'string'
      }
    },
    'n': {
      'title': 'Modulus',
      'description': 'The modulus for a standard pem.',
      'type': 'string'
    },
    'e': {
      'title': 'Exponent',
      'description': 'The exponent for a standard pem.',
      'type': 'string'
    },
    'kid': {
      'title': 'Key ID',
      'description': 'The unique identifier for the key.',
      'type': 'ID'
    },
    'x5t': {
      'title': 'Thumbprint',
      'description': 'The thumbprint of the x.509 cert (SHA-1 thumbprint).',
      'type': 'string'
    }
    // !end
  },
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'Key',
    service: {
      sort: { _id: 1 },
    },
    // sql: {
    //   sqlTable: 'Keys',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: '_id' } },
      // !end
    },
    // !code: graphql_more // !end
  },
}

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
