
/* eslint quotes: 0 */
// Validation definitions for validateSchema hook for service `artifacts`. (Can be re-generated.)
const { validateSchema } = require('feathers-hooks-common')
const merge = require('lodash.merge')
const ajv = require('ajv')
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: set_id_type
// eslint-disable-next-line no-unused-vars
const ID = 'string'
// !end

let base = merge({},
  // !<DEFAULT> code: base
  {
    title: "Artifacts",
    description: "A single, tangible piece of work that serves as evidence of accomplishment.",
    required: [
      "name",
      "userId"
    ],
    uniqueItemProperties: [],
    properties: {
      name: {
        title: "Name",
        description: "A descriptive name for the artifact",
        type: "string"
      },
      userId: {
        title: "Owner",
        description: "The owner of the artifact",
        type: ID
      },
      uri: {
        title: "URI",
        description: "A publicly-accessable URI for the artifact",
        type: "string",
        format: "uri"
      },
      narrative: {
        title: "Narrative",
        description: "A story to help people understand the meaning and significance of the artifact",
        type: "string",
        format: "markdown"
      },
      status: {
        title: "Completion Status",
        description: "Indicates the stage of completion for the artifact, e.g. draft, work-in-progress, complete, etc.",
        type: "string",
        enum: [
          "draft",
          "complete",
          "work-in-progress",
          "idea",
          "will-not-complete"
        ]
      },
      tags: {
        title: "Tags",
        description: "One or more key words or phrases that describe or categorize this artifact",
        type: "array",
        uniqueItems: true,
        items: {
          type: "string"
        }
      },
      notes: {
        title: "Private Notes",
        description: "Private notes or \"to do\" items only visible to the artifact owner",
        type: "array",
        uniqueItems: true,
        items: {
          type: "object",
          properties: {
            note: {
              title: "Note",
              description: "The actual note or \"to do\" item",
              type: "string"
            },
            done: {
              title: "Done",
              description: "Whether or not the \"to do\" item has been completed",
              type: "boolean",
              default: false
            }
          }
        }
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
