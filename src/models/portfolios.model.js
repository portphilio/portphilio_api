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
    artifacts: {
      type: mongoose.Schema.Types.ObjectId
    }
  })

  return mongooseClient.model('portfolios', portfolios)
};
