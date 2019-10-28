const searchHook = require('../../src/hooks/search')

describe('The search() hook', () => {
  const search = searchHook()

  it('Search.js functionality', () => {
    //expect.assertions(5)
    const context = {
      type: 'before',
      params: {
        query: {
          $limit: 3,
          first_name: {
            $search: ['bob', 'joe', 'sue']
          },
          last_name: {
            $search: 'blue, green,orange, red,     portphilio'
          }
        }
      }
    }

    const $regex = /blue|green|orange|red|portphilio/gi

    const testContext = {
      type: 'before',
      params: {
        query: {
          $limit: 3,
          first_name: {
            $in: [
              new RegExp('bob', 'i'),
              new RegExp('joe', 'i'),
              new RegExp('sue', 'i')
            ]
          },
          last_name: {
            $regex
          }
        }
      }
    }

    const result = search(context)

    //console.log(Array.isArray(result.params.query))
    //console.log(result.params.query.$limit.value())

    expect(result).toStrictEqual(testContext)
  })
})
