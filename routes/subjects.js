/**
 * Created by Yu on 2017/2/28.
 */
var express = require('express');
var router = express.Router();
var Subject=require("../model/models/subject");


//1.添加分类

//2.根据分类查看课程



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
