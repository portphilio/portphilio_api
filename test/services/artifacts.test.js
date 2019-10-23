const app = require('../../src/app')

describe('\'artifacts\' service', () => {
  it('registered the service', () => {
    const service = app.service('artifacts')
    expect(service).toBeTruthy()
  })

  it('returns a plain array of objects if `$limit: \'-1\' is set in the query', async () => {
    const artifacts = await app
      .service('artifacts')
      .find({ query: { $limit: '-1' } })
    expect(Array.isArray(artifacts)).toBe(true)
  })
})
