const { NotImplemented } = require('@feathersjs/errors')
const axios = require('axios')
const jwt = require('jsonwebtoken')

class Service {
  constructor (options) {
    this.options = options || {}
  }
  setup (app) {
    this.app = app
  }
  async find () { throw new NotImplemented() }
  async get () { throw new NotImplemented() }
  async create () { throw new NotImplemented() }
  async update (id) {
    return this.app.service('auth0/users').get(id).then(
      function(user) {
        return axios({
          method: 'post',
          url: 'https://www.googleapis.com/oauth2/v4/token',
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
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
  async patch () { throw new NotImplemented() }
  async remove () { throw new NotImplemented() }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
