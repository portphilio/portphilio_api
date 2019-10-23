const axios = require('axios')
const url = require('url')
const app = require('../src/app')

const port = app.get('port') || 3030
const getUrl = pathname =>
  url.format({
    hostname: app.get('host') || 'localhost',
    protocol: 'http',
    port,
    pathname
  })

describe('Feathers application tests (with jest)', () => {
  let server
  beforeAll(done => {
    server = app.listen(port)
    server.once('listening', () => done())
  })

  afterAll(done => {
    server.close(done)
  })

  it('starts and shows the index page', () => {
    expect.assertions(1)
    return axios.get(getUrl()).then(body => {
      expect(body.data.indexOf('<html>')).not.toBe(-1)
    })
  })

  describe('404', () => {
    it('shows a 404 HTML page', () => {
      expect.assertions(2)
      return axios({
        url: getUrl('path/to/nowhere'),
        headers: {
          Accept: 'text/html'
        }
      }).catch(res => {
        expect(res.response.status).toBe(404)
        expect(res.response.data.indexOf('<html>')).not.toBe(-1)
      })
    })

    it('shows a 404 JSON error without stack trace', () => {
      expect.assertions(4)
      return axios({
        url: getUrl('path/to/nowhere'),
        json: true
      }).catch(res => {
        const { data, status } = res.response
        expect(status).toBe(404)
        expect(data.code).toBe(404)
        expect(data.message).toBe('Page not found')
        expect(data.name).toBe('NotFound')
      })
    })
  })
})
