let passport = require('passport')
let LocalPassport = require('passport-local')
let User = require('mongoose').model('User')

module.exports = () => {
    passport.use(new LocalPassport(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
        User
            .findOne({usernane: username})
            .then(user => {
                //ако user-a не е намерен
                if(!user) return done(null, false)
                // ако user-a не може да се authenticate
                if(!user.authentication(password)) return done(null, false)
                // ако всичко е наред - ето ти user-a с който да се logne-ш
                return done(null, user)
            }, err => { return done(err)})
    }))


    passport.serializeUser((user, done) => {
        if(user) return done(null, user._id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                if(!user) return done(null, false)

                return done(null, user)
            })
    })
}