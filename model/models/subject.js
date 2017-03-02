/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Subject=sequelizer.define("t_subject", {//定义表
    id: {
        //
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "pk,course id"
    },
    name:{
        type:Sequelize.STRING,
        allowNull: true,
        comment:"subject name"
    }
});
Subject.sync();//生成表
module.exports=Subject;