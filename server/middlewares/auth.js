var jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  /*
     * Check if authorization header is set
     */
  if (
    req.headers.hasOwnProperty('authorization')
  ) {
    try {
      
      /*
             * Try to decode & verify the JWT token
             * The token contains user's id ( it can contain more informations )
             * and this is saved in req.user object
             */

      req.user = jwt.verify(
        req.headers['authorization'].split(' ')[1],
        process.env.JWT_SECRET
      )
    } catch (err) {
    
      /*
             * If the authorization header is corrupted, it throws exception
             * So return 401 status code with JSON error message
             */
      return res.status(401).json({
        error: {
          msg: 'Failed to authenticate token!',
          err
        }
      })
    }
  } else {
    
    /*
         * If there is no autorization header, return 401 status code with JSON
         * error message
         */
    return res.status(401).json({
      error: {
        msg: 'No token!'
      }
    })
  }
  next()
  return
}
