const assert = require('assert')
const app = require('../../src/app')

describe('\'artifacts\' service', () => {
  it('registered the service', () => {
    const service = app.service('artifacts')

    assert.ok(service, 'Registered the service')
  })
})
