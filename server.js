var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000,
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist'));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
  console.log('running on ', port);
})

// REMEMBER TO MAKE CONTROLLER AND MODELS FILE 