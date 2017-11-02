var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var CtrRoute = require("../controller/airplaneCtrl");


mongoose.Promise = global.Promise;


/* GET home page. */
router.get('/', CtrRoute.Climb);


module.exports = router;
