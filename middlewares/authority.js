/**
 * Created by Yu on 2017/2/28.
 *
 * Response
 * {
 * status: 0-success, 1-error, 2-not login, 3-no authority, 4-not exist, 5-wrong message
 *
 * }
 *
 *
 */
var Manager=require("../model/models/manager");
authority = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({status:2});
        }
        next();
    },

    checkAuthorityLevel1: function checkNotLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({status:2});
        }else{
            var authorityType=0;
            Manager.findOne({where:{id:req.session.user.id}}).then(function(msg){
                if(!msg){
                    res.json({status:4,msg:'not exist'});
                }else{
                    authorityType=msg.authorityType;
                    if(authorityType<1){
                        return res.send({status:3});
                    }
                    next();
                }
            },function(){
                res.json({status:1,msg:'other reason'});
            });
        }
        //不能在此处返回，或调用next方法，记住node异步特性
    },
    checkAuthorityLevel2: function checkNotLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({status:2});
        }else{
            var authorityType=0;
            Manager.findOne({where:{id:req.session.user.id}}).then(function(msg){
                if(!msg){
                    res.json({status:4,msg:'not exist'});
                }else{
                    authorityType=msg.authorityType;
                    if(authorityType<2){
                        return res.send({status:3});
                    }
                    next();
                }
            },function(){
                res.json({status:1,msg:'other reason'});
            });
        }
    },
    checkAuthorityLevel3: function checkNotLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({status:2});
        }else{
            var authorityType=0;
            var msg1;
            Manager.findOne({where:{id:req.session.user.id}}).then(function(msg){
                msg1=msg;
                if(!msg){
                    res.json({status:4,msg:'not exist'});
                    return;
                }else{
                    if(msg.authorityType<3){
                        return  res.send({status:3});

                    }
                    next();
                }
            },function(){
                res.json({status:1,msg:'other reason'});
            });

        }
    }
};
module.exports = authority;