var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var climbDataSchema = new mongoose.Schema({
    weight: Number,
    vFriFlap5: Number,
    vFriFlap10: Number,
    vFriFlap15: Number,
    vClimb: Number
});

mongoose.model('ClimbData', climbDataSchema, 'ClimbData');