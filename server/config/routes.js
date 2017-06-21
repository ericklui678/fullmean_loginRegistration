var users = require('../controllers/users.js')
module.exports = function(app) {
  app.get('/', function(req, res, next){
    res.send('hello world')
  })
  app.post('/name', function(req, res, next){
    users.create(req, res)
  })
  // app.post('/new', function(req, res, next) {
  //   notes.create(req, res)
  // })
}