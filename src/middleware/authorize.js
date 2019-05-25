// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return function authorize(req, res, next) {
    // make sure Authorize header is added to the feathers params
    req.feathers = { ...req.feathers, headers: req.headers }
    // pass the requesting IP address as well
    req.feathers.ip = req.headers['x-real-ip']
    next()
  }
}
