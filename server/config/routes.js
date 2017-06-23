var users = require('../controllers/users.js');
var path = require('path');

module.exports = function(app) {
  app.post('/name', function(req, res){
    users.create(req, res)
  })
  app.get('*', function(req, res){
    res.sendFile(path.resolve('public/dist/index.html'));
  })
}