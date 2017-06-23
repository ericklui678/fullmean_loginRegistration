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
      if(data.length) { res.json(data[0]); }
      else {
        User.create(req.body, function (err, data){
          if(err) { console.log(err); }
          if(data) {res.json(data); }
        })
      }
    })
  },
}

/*
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

module.exports = {
  create: function (req, res) {
    console.log('inside create');
    Topic.create(req.body, function (err, data){
      if(err) { console.log(err); }
      if(data) { res.json(data); }
    })
  },
  find: function (req, res){
    Topic.find(function(err, data){
      if(err) { console.log(err); }
    })
    .sort({'createdAt': -1})
    .populate('_user')
    .exec(function(err, data){
      if(data) { res.json(data); }
    })
  },
  findOne: function (req, res){
    Topic.find({_id: req.params.id}, function (err, data){
      if(err) { console.log(err) }
      if(data) { res.json(data); }
    })
  },
  addPost: function (req, res){
    Topic.findOne({_id: req.body._topic}, function(err, topic){
      var post = new Post(req.body);
      post._topic = req.body._topic;
      topic.posts.push(post);
      post.save(function(err){
        topic.save(function(err){
          if(err) { console.log(err) }
          else { res.json(topic); }
        })
      })
    })
  },
  showAll: function(req, res){
    Topic.findOne({_id: req.params.id})
    .populate({
      path: 'posts',
      populate: {
        path: '_user comments',
        options: { sort: {'createdAt': -1} },
        populate: {
          path: '_user',
        }
      },
    })
    .exec(function (err, data) {
      res.json(data);
    })
  },
  showUser: function(req, res){
    Topic.count({_user: req.params.id}, function (err, data){
      if(err) {console.log(err);}
      if(data) {res.json(data);}
    })
  }
}
*/