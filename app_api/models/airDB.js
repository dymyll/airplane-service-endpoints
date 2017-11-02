var mongoose = require("mongoose");

var connection = "mongodb://dymyll:Prince2410@ds157614.mlab.com:57614/mytestdb";
mongoose.connect(connection, { useMongoClient: true});


mongoose.Promise = global.Promise;

require('./airplane');