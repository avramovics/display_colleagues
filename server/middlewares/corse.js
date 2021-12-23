module.exports = function(app){
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', `http://${process.env.HOST}:3000`) // update to match the domain you will make the request from
        res.header('Access-Control-Allow-Credentials', true)
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token'
        )
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
        if (req.method === 'OPTIONS') {
          res.status(204).send()
        } else {
          next()
        }
      })
}