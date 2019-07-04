
// Configure Feathers app. (Can be re-generated.)
// !code: preface // !end
const path = require('path')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('./logger')

// !<DEFAULT> code: favicon_import
const favicon = require('serve-favicon')
// !end

const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')
const express = require('@feathersjs/express')
const socketio = require('@feathersjs/socketio')

const middleware = require('./middleware')
const services = require('./services')
const appHooks = require('./app.hooks')
const channels = require('./channels')
const generatorSpecs = require('../feathers-gen-specs.json')

const mongoose = require('./mongoose')
// !code: imports
const auth0 = require('@morphatic/feathers-auth0')
// !end
// !code: init
// Domains/IP Addresses whitelisted for CORS
const whitelist = [
  'https://portphil.io',
  'https://*.portphil.io',
  'https://portphilio.test',
  'https://*.portphilio.test',
  'https://portphilio.test:8080',
  'https://*.portphilio.test:8080',
  // Auth0 Whitelist
  'https://138.91.154.99',
  'https://54.183.64.135',
  'https://54.67.77.38',
  'https://54.67.15.170',
  'https://54.183.204.205',
  'https://54.173.21.107',
  'https://54.85.173.28',
  'https://35.167.74.121',
  'https://35.160.3.103',
  'https://35.166.202.113',
  'https://52.14.40.253',
  'https://52.14.38.78',
  'https://52.14.17.114',
  'https://52.71.209.77',
  'https://34.195.142.251',
  'https://52.200.94.42'
]
// !end

const app = express(feathers())
// !code: use_start // !end

// Load app configuration
app.configure(configuration())
// !<DEFAULT> code: init_config
app.set('generatorSpecs', generatorSpecs)
// !end

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet(
  // !code: helmet_config // !end
))
app.use(cors(
  // !code: cors_config
  //  Allowed origins
  {
    origin: (origin, cb) => {
      logger.info('request origin: %s', origin)
      if (whitelist.includes(origin) || !origin) {
        cb(null, true)
      } else {
        cb(new Error('Not allowed by CORS'))
      }
    }
  }
  // !end
))
app.use(compress(
  // !code: compress_config // !end
))
app.use(express.json(
  // !code: json_config // !end
))
app.use(express.urlencoded(
  // !<DEFAULT> code: urlencoded_config
  { extended: true }
  // !end
))
// !<DEFAULT> code: use_favicon
// Use favicon
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
// !end
// !<DEFAULT> code: use_static
// Host the public folder
app.use('/', express.static(app.get('public')))
// !end
// !code: use_end // !end

// Set up Plugins and providers
// !code: config_start // !end
app.configure(express.rest(
  // !code: express_rest // !end
))
app.configure(socketio(
  // !code: express_socketio // !end
))
// Configure database adapters
app.configure(mongoose)

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware)
// Set up our services (see `services/index.js`)
app.configure(services)
// Set up event channels (see channels.js)
app.configure(channels)
// !code: config_middle
app.configure(auth0())
// allow patch/update/delete of multiple users at once
// needed to be able to patch-by-auth0-ID from Auth0 rule
app.service('auth0/users').multi = true
// !end

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger }))
// !code: config_end // !end

app.hooks(appHooks)

const moduleExports = app
// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
