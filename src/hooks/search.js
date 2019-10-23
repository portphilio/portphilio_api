/**
 * A hook to implement a fuzzy search on a field
 */
const { checkContext } = require('feathers-hooks-common')

module.exports = function() {
  // Return the actual hook.
  return context => {
    // Only allow this before find() queries
    checkContext(context, 'before', ['find'])

    // get the query
    const query = context.params.query

    // loop through the fields in the query
    for (let field in query) {
      // check to see if the field contains a $search property
      // and that the field doesn't contain a $
      if (query[field].$search && !field.includes('$')) {
        const $search = query[field].$search
        // is $search an array
        if (Array.isArray($search)) {
          // yes, map array elements to $regex items
          query[field] = { $in: $search.map(t => new RegExp(t, 'i')) }
        } else {
          // no, convert scalar $search into a $regex
          const $regex = new RegExp($search.replace(/,\s*|\s+/g, '|'),'gi')
          query[field] = { $regex }
        }
      }
    }

    // replace the original query with the modified one
    context.params.query = query

    // Best practice: hooks should always return the context.
    return context
  }
}
