/**
 * Created by Yu on 2017/2/28.
 * Response
 * {
 *      status: 0-success, 1-error, 2-not login, 3-no authority, 4-not exist, 5-wrong message
 * }
 * 本文件包含的接口全部与管理员登陆信息有关，不包含其它接口
 */
var express = require('express');
var router = express.Router();
var Manager=require("../model/models/manager");
var authority=require("../middlewares/authority")

//1.登陆
router.post('/login',function(req,res,next){
    var phone=req.body.phone;
    var password=req.body.password;
    Manager.findOne({where:{phone:phone}}).then(function(msg){
        if(!msg){
            res.json({status:4,msg:'not exist'});
        }else if(msg.password==password){
            var user={id:msg.id,userName:msg.userName,password:msg.password,};
            req.session.user=user;
            res.json({status:0,msg:'login success',id:msg.id,authorityType:msg.authorityType});
        }else{
            res.json({status:5,msg:'wrong password'});
        }
    },function(){
        res.json({status:1,msg:'other reason'});
    })
})

//2.添加教师/管理员
router.post('/addManager',authority.checkAuthorityLevel3,function(req,res,next){
    var message={"phone":req.body.phone,"userName":req.body.userName,
        "password":req.body.password,"authorityType":req.body.authorityType,
        "workType":req.body.workType};
    Manager.findOne({where:{phone:req.body.phone}}).then(function(msg){
        if(!msg){
            User.build(message).save().then(function(){
                res.send({status:0,msg:"success"});
            },function(){
                res.send({status:1,msg:"database error"});
            })
        }else{
            res.json({status:5,msg:'teacher or manager exists'});
        }
    },function(){
        res.json({status:1,msg:'other reason'});
    });

})
//3.退出登陆


//4.删除管理员/教师


//5.更改管理员/教师信息


//6.管理员/教师信息列表

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;
