
// Define the Feathers schema for service `artifacts`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !code: schema_header
  title: 'Artifacts',
  description: 'A single, tangible piece of work that serves as evidence of accomplishment.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'name',
    'userId'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    'name': {
      'title': 'Name',
      'description': 'A descriptive name for the artifact',
      'type': 'string'
    },
    'userId': {
      'title': 'Owner',
      'description': 'The owner of the artifact',
      'type': 'ID'
    },
    'uuid': {
      'title': 'UUID',
      'description': 'A "local" ID for the artifact',
      'type': 'string'
    },
    'uri': {
      'title': 'URI',
      'description': 'A publicly-accessable URI for the artifact',
      'type': 'string',
      'format': 'uri'
    },
    'narrative': {
      'title': 'Narrative',
      'description': 'A story to help people understand the meaning and significance of the artifact',
      'type': 'string',
      'format': 'markdown'
    },
    'status': {
      'title': 'Completion Status',
      'description': 'Indicates the stage of completion for the artifact, e.g. draft, work-in-progress, complete, etc.',
      'type': 'string',
      'enum': [
        'draft',
        'complete',
        'work-in-progress',
        'idea',
        'will-not-complete'
      ]
    },
    'tags': {
      'title': 'Tags',
      'description': 'One or more key words or phrases that describe or categorize this artifact',
      'type': 'array',
      'uniqueItems': true,
      'items': {
        'type': 'string'
      }
    },
    'notes': {
      'title': 'Private Notes',
      'description': 'Private notes or "to do" items only visible to the artifact owner',
      'type': 'array',
      'uniqueItems': true,
      'items': {
        'type': 'object',
        'properties': {
          'note': {
            'title': 'Note',
            'description': 'The actual note or "to do" item',
            'type': 'string'
          },
          'done': {
            'title': 'Done',
            'description': 'Whether or not the "to do" item has been completed',
            'type': 'boolean',
            'default': false
          }
        }
      }
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
    name: 'Artifact',
    service: {
      sort: { _id: 1 },
    },
    // sql: {
    //   sqlTable: 'Artifacts',
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
