const search = require('../../src/hooks/search.js')

describe('Customized search hook', () => {
  const context = {
    params: {
      query: {
        $limit: 3,
        first_name: {
          $search: ['bob', 'joe', 'sue']
        },
        last_name: {
          $search: 'thump'
        }
      }
    }
  }

  // const query = context.params.query

  // Edit after I find out how the outputted query is modified
  const testContext = {
    context: {
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
            //$regex = new RegExp('thump', 'gi')
          }
        }
      }
    }
  }

  it('Search.js functionality', () => {
    expect.assertions(2)

    const output = search(context)
    const expected = testContext.params.query
    console.log(output)
    console.log(expected)
    expect(output.params.query).toBe(expected)
    expect(output.params.query[0]).toBe(3)
  })
})
