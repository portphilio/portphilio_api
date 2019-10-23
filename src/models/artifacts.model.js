// artifacts-model.js - A mongoose model
const mongoose = require('mongoose')

module.exports = app => {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const artifacts = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      uuid: String,
      uri: String,
      narrative: String,
      status: {
        type: String,
        enum: [
          'draft',
          'complete',
          'work-in-progress',
          'idea',
          'will-not-complete'
        ]
      },
      tags: [String],
      notes: [
        {
          note: String,
          done: {
            type: Boolean,
            default: false
          }
        }
      ]
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('artifacts', artifacts)
}
