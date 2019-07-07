
/* eslint-disable no-console */
// Start the server. (Can be re-generated.)
// !code: preface // !end
const logger = require('./logger')
const app = require('./app')
// !code: imports
const fs = require('fs')
const https = require('https')
const { inspect } = require('util')
// !end
// !code: init // !end

const port = app.get('port')
let server
if (process.env.NODE_ENV !== 'production') {
  server = https.createServer({
    key: fs.readFileSync('./api.portphilio.test-key.pem', 'utf8'),
    cert: fs.readFileSync('./api.portphilio.test.pem', 'utf8')
  }, app)
  server.listen(port)
  app.setup(server)  // see: https://docs.feathersjs.com/api/express.html#https
  if (process.env.NODE_ENV === 'ngrok') {
    const ngrok = require('ngrok');
    (async () => {
      const ngrok_url = await ngrok.connect({
        proto: 'http',
        addr: `https://api.portphilio.test:${port}`,
        subdomain: 'api-portphilio',
        authtoken: app.get('ngrok-token'),
        log: 'stdout',
        bind_tls: true
      })
      logger.info('ngrok serving Portphilio API from %s', ngrok_url)
    })()
  }
} else {
  server = app.listen(port)
}
// !code: init2 // !end

process.on('unhandledRejection', (reason, p) => {
  // !<DEFAULT> code: unhandled_rejection_log
  logger.error('Unhandled Rejection at: Promise %s %s', p, reason)
  // !end
  // !code: unhandled_rejection // !end
})

server.on('listening', async () => {
  // !code: listening_log
  // logger.info('Portphilio API application started on https://%s:%d', app.get('host'), port)
  // console.log(app.io.sockets.sockets)
  // const socketioJwt = require('socketio-jwt')
  // app.io.sockets.use(socketioJwt.authorize({
  //   secret: (request, decodedToken, callback) => {
  //     console.log('request: ', inspect(request))
  //     console.log('decodedToken: ', inspect(decodedToken))
  //     const secret = Buffer.from(app.get('auth0options').clientSecret, 'base64')
  //     logger.info('secret: %s', secret)
  //     callback(null, secret)
  //   },
  //   handshake: false
  // }))
  app.io.sockets.on('connection', socket => {
    // console.log('connection', inspect(socket))
    console.log('connection')
    socket.on('authenticate', socket => {
      console.log('authenticate', inspect(socket))
    })
  })
  // !end
  // !code: listening // !end
  // !code: listening1 // !end
})

// !code: funcs // !end
// !code: end
// !end
