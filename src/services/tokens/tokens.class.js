
// Class for the custom service `tokens` on path `/tokens`. (Can be re-generated.)
/* eslint-disable no-unused-vars */

// !code: imports
const rp = require('request-promise')
const jwt = require('jsonwebtoken')
const logger = require('../../logger')
// !end
// !code: init // !end

class Service {
  constructor (options) {
    this.options = options || {}
    // !code: constructor1 // !end
  }
  setup (app) {
    this.app = app
  }

  // !<DEFAULT> code: find
  async find (params) {
    return []
  }
  // !end

  // !code: get
  async get (id, params) {
    this.app.service('auth0/users').get(id).then(
      user => {

      }
    )
  }
  // !end

  // !<DEFAULT> code: create
  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)))
    }

    return data
  }
  // !end

  // !code: update
  async update (id, data, params) {
    logger.info('update tokens called with: %s', id)
    return this.app.service('auth0/users').get(id).then(
      function(user) {
        return rp({
          method: 'POST',
          uri: 'https://www.googleapis.com/oauth2/v4/token',
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          form: {
            grant_type: 'refresh_token',
            client_id: this.options.clientId,
            client_secret: this.options.clientSecret,
            refresh_token: user.app_metadata.google_refresh_token  
          }
        })
      }.bind(this)
    ).then(
      refreshed => {
        // parse the response and extract the key values
        const { access_token, id_token } = JSON.parse(refreshed)
        // decode the id_token and extract the expiry timestamp
        const { exp } = jwt.decode(id_token, { json: true })
        return {
          accessToken: access_token,
          expiresAt: exp
        }
      }
    )
  }
  // !end

  // !<DEFAULT> code: patch
  async patch (id, data, params) {
    return data
  }
  // !end

  // !<DEFAULT> code: remove
  async remove (id, params) {
    return { id }
  }
  // !end
  // !code: more // !end
}

const moduleExports = function (options) {
  return new Service(options)
}

moduleExports.Service = Service

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
