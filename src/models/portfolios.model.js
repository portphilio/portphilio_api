/* eslint-disable linebreak-style */
const mongoose = require('mongoose')

module.exports = app => {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const portfolios = new Schema({
    portfolioName: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    uuid: String,
    artifacts: [
      {
        type: mongoose.Schema.Types.ObjectId
      }
    ],
    narrative: String,
    tags: [
      String
    ]
  },
  {
    timestamps: true
  })

  return mongooseClient.model('portfolios', portfolios)
};
