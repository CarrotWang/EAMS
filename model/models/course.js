/**
 * Created by Yu on 2017/2/28.
 */
var Sequelize=require("sequelize");
var sequelizer=require("../sequelizer");
var Course=sequelizer.define("t_course",{//定义表
    id:{
        //
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        comment:"pk,course id"
    },
    number:{
        type:Sequelize.STRING,
        allowNull: false,
        comment:"course number"
    },
    name:{
        //
        type:Sequelize.STRING,
        allowNull: false,
        comment:"course name"
    },
    subjectId:{
        //
        type:Sequelize.STRING,
        allowNull: false,
        comment:"subject id"
    },
    teacherId:{
        type:Sequlize.INTEGER,
        allowNull:false,
        comment:"teacher pk"
    },
    teacherName:{
        type:Sequlize.STRING,
        allowNull:false,
        comment:"teacher name"

    },
    address:{
        type:Sequelize.STRING,
        allowNull:false,
        comment:"course address"
    },
    beginDate:{
        type:Sequelize.DATE,
        allowNull:false,
        comment:"begin date"
    },
    endDate:{
        type:Sequelize.DATE,
        allowNull:false,
        comment:"end date"
    },
    times:{
        type:Sequelize.INTEGER,
        allowNull:false,
        comment:"course lesson number"
    },
    fee:{
        type:Sequelize.INTEGER,
        allowNull:false,
        comment:"fee for the course"
    },
    description:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"descriptions"
    }



});
Course.sync();//生成表
module.exports=Course;