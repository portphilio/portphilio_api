const { Auth0Service, Auth0Strategy } = require('@morphatic/feathers-auth0-strategy')

module.exports = app => {
  const authService = new Auth0Service(app)

  authService.register('auth0', new Auth0Strategy())

  app.use('/authentication', authService)
}