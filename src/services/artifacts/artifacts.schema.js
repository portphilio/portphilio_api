// Define the Feathers schema for service `artifacts`.

// JSON-Schema
let schema = {
  title: 'Artifacts',
  description: 'A single, tangible piece of work that serves as evidence of accomplishment.',
  required: [
    'name',
    'userId'
  ],
  uniqueItemProperties: [],
  properties: {
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
      'description': 'A publicly-accessible URI for the artifact',
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
  }
}

module.exports = {
  schema
}
