var app = require('./server.js')

/*
 * Start server
 */
app.listen(process.env.PORT, () => console.log('running on port:' + process.env.PORT))
