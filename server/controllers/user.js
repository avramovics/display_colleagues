var jwt = require('jsonwebtoken')

module.exports = function(router) {
  router.post('/login', function(req, res) {
    /*
         * Check if the username and password is correct
         */

    let { username, password } = req.body

    if (username === 'admin' && password === 'admin') {
      let expDate = Math.floor(new Date() / 1000) + 60 * 60
     ;
      res.json({
        id: 1,
        username: 'admin',
        jwt: jwt.sign(
          {
            id: 1,
            exp: expDate
          },
          process.env.JWT_SECRET
        )
      })
    } else {
            /*
             * If the username or password was wrong, return 401 ( Unauthorized )
             * status code and JSON error message
             */
      res.status(401).json({
        error: {
          message:
            'Wrong username or password!' +
            req.body.username +
            req.body.password
        }
      })
    }
  })

  return router
}
