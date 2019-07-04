
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `artifacts`. (Can be re-generated.)
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
      name: {
        title: "Name",
        description: "A descriptive name for the artifact",
        bsonType: "string"
      },
      userId: {
        title: "Owner",
        description: "The owner of the artifact",
        bsonType: "objectId"
      },
      uuid: {
        title: "UUID",
        description: "A \"local\" ID for the artifact",
        bsonType: "string"
      },
      uri: {
        title: "URI",
        description: "A publicly-accessable URI for the artifact",
        format: "uri",
        bsonType: "string"
      },
      narrative: {
        title: "Narrative",
        description: "A story to help people understand the meaning and significance of the artifact",
        format: "markdown",
        bsonType: "string"
      },
      status: {
        title: "Completion Status",
        description: "Indicates the stage of completion for the artifact, e.g. draft, work-in-progress, complete, etc.",
        enum: [
          "draft",
          "complete",
          "work-in-progress",
          "idea",
          "will-not-complete"
        ],
        bsonType: "string"
      },
      tags: {
        title: "Tags",
        description: "One or more key words or phrases that describe or categorize this artifact",
        uniqueItems: true,
        items: {
          type: "string"
        },
        bsonType: "array"
      },
      notes: {
        title: "Private Notes",
        description: "Private notes or \"to do\" items only visible to the artifact owner",
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
        },
        bsonType: "array"
      }
    },
    required: [
      "name",
      "userId"
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
