let express = require('express')

let app = express()

let env = process.env.NODE_ENV || 'development'
let config = require('./server/config/config')[env]

require('./server/config/database')(config)
require('./server/config/express')(config, app)


app.get('/', (req, res) => {
  
  res.render('index')
})

app.listen(config.port)
console.log(`Express ready on port ${config.port}.`)
