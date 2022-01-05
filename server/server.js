var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
require('dotenv').config({path:__dirname+'/../.env'})

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
    require('./middlewares/corse')(app);
}
    
  /*
  * For production there is no need to use CORSE
  * We will serve the static files..
  */

  app.use(express.static('../client/dist'))

  app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+ '/../client/dist/'+ 'index.html'))
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
