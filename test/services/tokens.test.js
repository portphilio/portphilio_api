const app = require('../../src/app')
const serviceToken = require ('../../src/services/tokens/tokens.service')

describe('\'tokens\' service', () => {
  it('registered the service', () => {
    const service = app.service('tokens')
    expect(service).toBeTruthy()
  })

  it('initialize the tokens', async () => {
    
  })
})
