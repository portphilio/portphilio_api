
// Class for the custom service `tokens` on path `/tokens`. (Can be re-generated.)
/* eslint-disable no-unused-vars */

// !code: imports
const rp = require('request-promise')
const jwt = require('jsonwebtoken')
// !end
// !code: init // !end

class Service {
  constructor (options) {
    this.options = options || {}
    // !code: constructor1 // !end
  }

  // !<DEFAULT> code: find
  async find (params) {
    return []
  }
  // !end

  // !<DEFAULT> code: get
  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    }
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
    return this.options.users.get(id, {
      query: {
        $select: [
          'app_metadata'
        ]
      }
    }).then(
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
            refresh_token: user.google.refresh_token  
          }
        })
      }.bind(this)
    ).then(
      refreshed => {
        const id_token = jwt.decode(refreshed.id_token)
        return {
          access_token: refreshed.access_token,
          expires_at: id_token.exp
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
