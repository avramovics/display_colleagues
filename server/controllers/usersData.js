const request = require('request')

module.exports = function(router) {
  router.get('/api/users-data', function(req, res) {
  const newurl = 'https://api.1337co.de/v3/employees'
  const headers = {"Authorization": process.env.AUTHORIZATION_TOKEN}
  request.get({url:newurl, headers: headers }, function (error, response, body) {
    // copy response headers
    for (var key in response.headers) {
      if (response.headers.hasOwnProperty(key)) {
        if(!"Content-Length"){
          res.setHeader(key, response.headers[key])
        }
      }
     }
    res.status(response.statusCode).send(JSON.parse(body))
  })
  })
  return router
}
