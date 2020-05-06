let express = require('express')
let mongoose = require('mongoose')

let app = express()

let env = process.env.NODE_ENV || 'development'
let config = require('./server/config/config')[env]

mongoose.Promise = global.Promise

app.set('view engine', 'pug')
app.set('views', './server/views')

app.get('/', (req, res) => {
  mongoose.connect(config.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
    })
  console.log('MongoDB ready!')

  res.render('index')
})

app.use(express.static('public'))

app.listen(config.port)
console.log(`Express ready on port ${config.port}.`)
