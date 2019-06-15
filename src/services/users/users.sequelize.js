
/* eslint quotes: 0 */
// Defines Sequelize model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    app_metadata: {
      type: DataTypes.JSONB
    },
    blocked: {
      description: "Has the user been blocked?",
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    blocked_for: {
      type: DataTypes.JSONB
    },
    created_at: {
      description: "ISO 8601 datetime when user was created",
      type: DataTypes.DATE
    },
    email: {
      description: "Unique email associated with Auth0 identity",
      type: DataTypes.TEXT
    },
    email_verified: {
      description: "Has the email been verified by the user?",
      type: DataTypes.BOOLEAN,
      defaultValue: "false"
    },
    family_name: {
      description: "OIDC-compliant field for last name",
      type: DataTypes.TEXT
    },
    gender: {
      description: "Theoretically the user's gender. Set by some social providers, e.g. Google.",
      type: DataTypes.TEXT
    },
    given_name: {
      description: "OIDC-compliant field for first name",
      type: DataTypes.TEXT
    },
    identities: {
      type: DataTypes.JSONB
    },
    guardian_authenticators: {
      type: DataTypes.JSONB
    },
    last_ip: {
      description: "The IP address from which the user last logged in",
      type: DataTypes.TEXT
    },
    last_login: {
      description: "The ISO8601 datetime when the user last logged in",
      type: DataTypes.DATE
    },
    last_password_reset: {
      description: "The ISO8601 datetime when the user last reset their password",
      type: DataTypes.DATE
    },
    locale: {
      description: "ISO 639-1 code associated with user's preferred locale, e.g.",
      type: DataTypes.TEXT
    },
    logins_count: {
      description: "The number of times the user has logged in",
      type: DataTypes.REAL,
      defaultValue: 0
    },
    multifactor: {
      type: DataTypes.JSONB
    },
    name: {
      description: "The full, formal name of the person",
      type: DataTypes.TEXT
    },
    nickname: {
      description: "The name by which this person prefers to be called",
      type: DataTypes.TEXT
    },
    password_set_date: {
      description: "The ISO8601 datetime when the user set their password; may be identical to `last_password_reset`",
      type: DataTypes.DATE
    },
    phone_number: {
      description: "This user's phone number, typically only available if SMS is used for MFA",
      type: DataTypes.TEXT
    },
    phone_verified: {
      description: "Has the user verified that their `phone_number` is valid?",
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    picture: {
      description: "A URL that points to a profile picture or avatar. Defaults to gravatar.",
      type: DataTypes.TEXT
    },
    updated_at: {
      description: "The ISO8601 datetime when the user was updated",
      type: DataTypes.DATE
    },
    user_id: {
      description: "The user_id from Auth0 for this member.",
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    user_metadata: {
      type: DataTypes.JSONB
    },
    username: {
      description: "The user's unique username (not typically set)",
      type: DataTypes.TEXT
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
