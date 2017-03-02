/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Student=sequelizer.define("t_student",{//定义表
    id:{
        //
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:"pk,student id"
    },
    name:{
        //
        type:Sequelize.STRING,
        allowNull: true,
        comment:"student name"
    },
    passwd:{
        //
        type:Sequelize.STRING,
        defaultValue:888888,
        allowNull: true,
        comment:"password, for update in future"
    },
    phone:{
        //
        type:Sequelize.STRING,
        allowNull:true,
        comment:"student phone number"
    },
    school:{
        //
        type:Sequelize.STRING,
        allowNull:false,
        comment:"student school"
    },
    parentName:{
        //
        type:Sequelize.STRING,
        allowNull:true,
        comment:"parent name"
    },
    parentType:{
        //
        type:Sequelize.ENUM("father","mother"),
        allowNull:true,
        comment:"parent type"
    },
    parentPhone:{
        //
        type:Sequelize.STRING,
        allowNull:true,
        comment:"parent phone number"
    }




});
Student.sync();//生成表
module.exports=Student;