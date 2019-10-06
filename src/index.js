/* eslint-disable no-console */

// import 3rd party modules
const fs = require('fs')
const https = require('https')
const ngrok = require('ngrok')

// import internal modules
const logger = require('./logger')
const app = require('./app')

// get the port
const port = app.get('port')

// configure the server for various scenarios
let server
if (process.env.NODE_ENV !== 'production') {
  // dev environment; use https locally
  server = https.createServer({
    key: fs.readFileSync('./api.portphilio.test-key.pem', 'utf8'),
    cert: fs.readFileSync('./api.portphilio.test.pem', 'utf8')
  }, app)
  // start up the server
  server.listen(port)
  // re-run setup; see: https://crow.docs.feathersjs.com/api/express.html#https
  app.setup(server)
  // if we're running ngrok
  if (process.env.NODE_ENV === 'ngrok') {
    (async () => {
      const ngrokUrl = await ngrok.connect({
        proto: 'http',
        addr: `https://api.portphilio.test:${port}`,
        subdomain: app.get('ngrok-subdomain') || undefined,
        authtoken: app.get('ngrok-token') || undefined,
        log: 'stdout',
        bind_tls: true
      })
      logger.info('ngrok serving Portphilio API from %s', ngrokUrl)
    })()
  }
} else {
  // production mode
  server = app.listen(port)
}

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)

server.on('listening', () =>
  logger.info('Portphilio API started on https://%s:%d', app.get('host'), port)
)
