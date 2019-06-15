
/* eslint quotes: 0 */
// Defines Mongoose model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    app_metadata: {
      roles: [
        String
      ],
      google_refresh_token: String
    },
    blocked: {
      type: Boolean,
      default: false
    },
    blocked_for: [
      {
        identifier: {
          type: String,
          required: true
        },
        ip_address: {
          type: String,
          required: true
        }
      }
    ],
    created_at: Date,
    email: String,
    email_verified: {
      type: Boolean,
      default: "false"
    },
    family_name: String,
    gender: String,
    given_name: String,
    identities: [
      {
        user_id: {
          type: String,
          required: true
        },
        provider: {
          type: String,
          required: true
        },
        connection: {
          type: String,
          required: true
        },
        isSocial: {
          type: Boolean,
          default: false,
          required: true
        },
        access_token: String,
        expires_in: {
          type: Number,
          min: 0
        }
      }
    ],
    guardian_authenticators: [
      {
        name: {
          type: String,
          required: true
        },
        enabled: {
          type: Boolean,
          default: false,
          required: true
        },
        is_trial_expired: {
          type: Boolean,
          default: false,
          required: true
        }
      }
    ],
    last_ip: String,
    last_login: Date,
    last_password_reset: Date,
    locale: String,
    logins_count: {
      type: Number,
      min: 0,
      default: 0
    },
    multifactor: [
      String
    ],
    name: String,
    nickname: String,
    password_set_date: Date,
    phone_number: String,
    phone_verified: {
      type: Boolean,
      default: false
    },
    picture: String,
    updated_at: Date,
    user_id: {
      type: String,
      required: true,
      unique: true
    },
    user_metadata: {},
    username: String
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
