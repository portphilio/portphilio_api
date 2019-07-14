/**
 * Sanitize data coming from Auth0 before it gets
 * sent to clients.
 */

const { checkContext, getItems, replaceItems } = require('feathers-hooks-common')

module.exports = () => {
  return context => {
    // Skip this hook if it's not the auth0/users or users service
    if (!['auth0/users', 'users'].includes(context.path)) return context

    // Throw if it's NOT a find() or a get() method
    checkContext(context, 'after', ['find', 'get'])

    // get the users
    const users = getItems(context)

    // sanitize them
    if (Array.isArray(users)) {
      users.forEach((u, i) => {
        // remove the app_metadata.google_refresh_token
        if (users[i] && users[i].app_metadata) {
          delete users[i].app_metadata.google_refresh_token
        }
      })
    } else {
      // remove the app_metadata.google_refresh_token
      delete users.app_metadata.google_refresh_token
    }

    // Place the modified users back in the context
    replaceItems(context, users)

    // Return the context
    return context
  }
}
