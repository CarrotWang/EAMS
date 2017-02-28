/**
 * Created by Yu on 2017/2/28.
 */
var express = require('express');
var router = express.Router();
var Student=require("../model/models/student");


//1.添加学生

//2.查看某一学生

//3.学生列表

//4.按姓名查找学生，并得到历史报名信息



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
