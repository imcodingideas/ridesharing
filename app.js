const 
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes/routes'),
    app = express();

// Use ES6 promises
mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/uber');
}

app.use(bodyParser.json());

// App Routes
routes(app);

module.exports = app;
