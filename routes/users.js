var express = require('express');
var router = express.Router();
var User=require("../model/models/manager");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
