let homeController = require('./home-controller')
let usersController = require('./users-controller')
let articlesController = require('./articles-controler')

module.exports = {
    home: homeController,
    users: usersController,
    articles: articlesController
}