const app = require('../../src/app')

// test tokens.class.test.js
describe('\'tokens\' service', () => {
  it('registered the service', () => {
    const service = app.service('tokens')
    expect(service).toBeTruthy()
  })
})
