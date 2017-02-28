/**
 * Created by Yu on 2017/2/28.
 */
var express = require('express');
var router = express.Router();
var Course=require("../model/models/course");

//1.添加课程，班号（course number）不能重复

//2.删除课程

//3.修改课程

//4.根据班号查询

//5.所有班的列表


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
