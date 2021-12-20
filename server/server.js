var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var path = require('path')

/*
* Get respons time 
*/

app.use(async (req, res, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(req.url, req.method, ms)
})


if(process.env.APP_ENV === "dev"){
    /*
    * Allow Origin. Define the url of the frontend app and allow it to use api
    * Development environment
    */
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
    
  /*
  * For production there is no need to use CORSE
  * We will serve the static files..
  */

  app.use(express.static('../client/build'))
  app.use(express.static('../client/public'))

  app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+ '/../client/build/'+ 'index.html'))
  })



/*
 * Add middleware. Because we defined the first parameter ( '/api/*' ), it will run
 * only for urls that starts with '/api/*'
 */

app.all('/api/*', require('./middlewares/auth.js'))

/*
 * Add the protected route '/users-data' after '/api'
 * So now it is available on /api/users-data
 */
app.use('/api/users-data', require('./controllers/usersData.js')(router))


/*
 * Add the '/login' route handler
 */
app.use('/', require('./controllers/user.js')(router))

module.exports = app
