let mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = (config) => {
    mongoose.connect(config.db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    let db = mongoose.connection

    db.once('open', (err) => {
        if(err) {
            console.log(err)
        }

        console.log('MongoDB ready!')
    })

    db.on('error', (err) => {
        console.log('Database error: ' + err)
    })

    require('../data/User').seedAdminUser() 
}