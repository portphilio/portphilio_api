// Initializes the `assets` service on path `/assets`
const hooks = require('./assets.hooks')
const aws = require('aws-sdk')
const AssetStore = require('s3-blob-store')
const AssetService = require('feathers-blob')

module.exports = app => {
  // get config values
  const { endpoint, accessKeyId, secretAccessKey, bucket } = app.get('spaces')

  // configure the store
  const store = AssetStore({
    client: new aws.S3({
      endpoint: new aws.Endpoint(endpoint),
      accessKeyId,
      secretAccessKey
    }),
    bucket
  })

  // Initialize our service with any options it requires
  app.use('/assets', AssetService({ Model: store }))

  // Get our initialized service so that we can register hooks
  const service = app.service('assets')

  service.hooks(hooks)
}
