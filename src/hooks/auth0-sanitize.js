/**
 * Sanitizes data coming from Auth0 and going to the client.
 */

const { checkContext, getItems, replaceItems } = require('feathers-hooks-common')

module.exports = function () {
  return (context) => {
    // Skip if it's not the auth0/users service
    if (context.service.path !== 'auth0/users') return context
    
    // Throw if it's NOT a find() or get() method.
    checkContext(context, 'after', ['find', 'get'])
    
    // Get the users
    const users = getItems(context)

    // sanitize them
    if (Array.isArray(users)) {
      users.forEach((u, i) => {
        // remove the app_metadata.google_refresh_token
        delete users[i].app_metadata.google_refresh_token
      })
    } else {
      // remove the app_metadata.google_refresh_token
      delete users.app_metadata.google_refresh_token
    }

    // Place the modified users back in the context.
    replaceItems(context, users)

    // Return the context.
    return context
  }
}
