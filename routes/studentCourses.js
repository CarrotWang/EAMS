/**
 * Created by Yu on 2017/2/28.
 */
var express = require('express');
var router = express.Router();
var StudentCourse=require("../model/models/studentCourse");

//1.根据学生查询报的班


//2.根据班级查所有学生


//3.根据报名时间查找报名的学生

//4.根据课程，报名时间，班号查找学生


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
