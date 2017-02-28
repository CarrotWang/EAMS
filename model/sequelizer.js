/**
 * Created by jiangjun on 2017/1/14.
 */
var sequelize=require('sequelize');
var sequelizer=new sequelize(
    "eamsDatabase",//数据库名
    "root",  //用户名
    "wangyu1991$$",      //密码
    {
        'dialect':'mysql',
        'host':'localhost',
        'port':3306
    }

);
module.exports=sequelizer;