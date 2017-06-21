var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  find: function (req, res) {
    User.find(function(err, data){
      if(err) { console.log(err); }
      else { res.json(data); }
    })
  },
  create: function (req, res) {
    User.find(req.body, function (err, data){
      if(err) { console.log(err) }
      if(data.length) { res.json({err: 'User already exists'}); }
      else {
        User.create(req.body, function (err, data){
          if(err) { console.log(err); }
          if(data) {res.json(data); }
        })
      }
    })
  },
}