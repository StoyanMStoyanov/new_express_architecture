let express = require('express')
let mongoose = require('mongoose')

let port = 3000

let app = express()
let env = process.env.NODE_ENV || 'development'
mongoose.Promise = global.Promise
app.get('/', (req, res) => {
  mongoose.connect('mongodb:/192.168.0.1:27017//some-express-db')
  console.log('MongoDB ready!')

  res.send('Cool.')
})

app.listen(port)
console.log(`Express ready on port ${port}`)
