var http = require ('http'),
    express = require ('express'),
    app = express(),
    port = process.env.port || 3001,
    MONGO_PORT = process.env.MONGO_PORT || 27017,
    MONGO_URL = process.env.MONGO_URL || "localhost",
    mongoose = require('mongoose'),
    Task = require('./api/models/demo1Model'),
    bodyParser = require ('body-parser')

    // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+MONGO_URL+':'+MONGO_PORT+'/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/demo1Routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

/*var server = http.createServer(app).listen(port, function() {
    console.log('Express API demo1 server listening on port ' + port)
});*/